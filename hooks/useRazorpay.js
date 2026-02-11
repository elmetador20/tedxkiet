"use client";
import { useState } from "react";

export default function useRazorpay() {
  const [loading, setLoading] = useState(false);

  const loadScript = () =>
    new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });

  const startPayment = async ({ amount, user }) => {
    setLoading(true);

    const orderRes = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ amount, user }),
    });

    const { order } = await orderRes.json();

    await loadScript();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Your Website",
      description: "Order Payment",
      order_id: order.id,
      prefill: user,
      method: { upi: true },

      handler: async function (response) {
        const verifyRes = await fetch("/api/paymentverify", {
          method: "POST",
          body: JSON.stringify(response),
        });

        const result = await verifyRes.json();
        window.location.href = result.redirectUrl;
      },

      theme: { color: "#1a73e8" },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();

    setLoading(false);
  };

  return { startPayment, loading };
}
