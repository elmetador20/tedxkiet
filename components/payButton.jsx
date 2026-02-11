"use client";

export default function PayButton({ amount, name, email, phone , branch,rollNo }) {
  const loadRazorpay = () => {
    return new Promise((resolve) => {
      if (globalThis.Razorpay) return resolve(true);

      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ amount, name, email, phone ,branch,rollNo}),
    });

    const data = await res.json();
    if (!data.order) return alert("Order creation failed!");

    const sdkLoaded = await loadRazorpay();
    if (!sdkLoaded) {
      alert("Failed to load Razorpay SDK");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: data.order.amount,
      currency: data.order.currency,
      name: "Payment",
      order_id: data.order.id,
      prefill: { name, email, contact: phone },
handler: async function (response) {
  const verifyRes = await fetch("/api/verifyPayment", {
    method: "POST",
    body: JSON.stringify(response),
  });

  const verifyData = await verifyRes.json();

  if (!verifyData.token) {
    alert("Payment verification failed");
    return   globalThis.location.href = `/failed`;
    
  }

  globalThis.location.href =
  `/success?token=${verifyData.token}&paymentId=${verifyData.paymentId}`;
},
    };

    const rzp = new globalThis.Razorpay(options);
    rzp.open();
  };

  return (
 <button
  onClick={handlePayment}
  className="w-full px-5 py-3 bg-red-600 text-white rounded-lg font-semibold hover:bg-red-700 tracking-wide transition-all"
>
  Pay ₹{amount}
</button>
  );
}
