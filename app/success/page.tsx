

"use client";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function Success() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
const paymentId = searchParams.get("paymentId");
  // Loading: null → still checking
  // true → valid
  // false → invalid
  const [valid, setValid] = useState<null | boolean>(null);
  const [error, setError] = useState<string | null>(null);

  /** -----------------------------
   *   VERIFY TOKEN (BEST PRACTICE)
   * ----------------------------- */
  useEffect(() => {
    if (!token || token === "null") {
      setValid(false);
      return;
    }
    let cancelled = false;

    async function verify() {
      try {
        const res = await fetch(`/api/verify?token=${token}`, {
          method: "GET",
          cache: "no-store",
        });

        if (!res.ok) {
          throw new Error("Server error");
        }

        const data: { valid: boolean } = await res.json();

        if (!cancelled) {
          setValid(data.valid === true);
        }
      } catch (error) {
        if (!cancelled) {
          setError("Unable to verify payment");
          setValid(false);
        }
      }
    }

    verify();

    return () => {
      cancelled = true;
    };
  }, [token]);


  /** -----------------------------
   *   RANDOM TXN ID
   * ----------------------------- */
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    setTransactionId(
      Math.random().toString(36).substring(2, 12).toUpperCase()
    );
  }, []);

  /** -----------------------------
   *   LOADING FALLBACK
   * ----------------------------- */
  if (valid === null) {
    return (
      <div className="flex items-center justify-center h-screen text-white text-xl">
        Verifying payment…
      </div>
    );
  }
  console.log("Success page loaded");

  /** -----------------------------
   *   ERROR BOUNDARY (CLIENT-SIDE)
   * ----------------------------- */
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <p className="text-xl mb-4">{error}</p>
        <Link
          href="/"
          prefetch={false}
          className="bg-white text-black px-6 py-2 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    );
  }

  /** -----------------------------
   *   INVALID TOKEN UI
   * ----------------------------- */
  if (!valid) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <p className="text-xl">Invalid or expired payment link.</p>
        <Link
          href="/"
          prefetch={false}
          className="mt-4 bg-white text-black px-6 py-2 rounded-lg"
        >
          Go Home
        </Link>
      </div>
    );
  }

  /** -----------------------------
   *   SUCCESS UI
   * ----------------------------- */
  return (
    <div className="min-h-screen bg-black text-white px-6 flex flex-col items-center justify-center relative overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-b from-red-900/20 to-black" />

      <div className="relative z-10 p-10 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 shadow-2xl max-w-lg w-full text-center">

        <div className="mx-auto w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <Check className="w-12 h-12 text-green-400" />
        </div>

        <h1 className="text-4xl font-light mb-2">Payment Successful</h1>
        <p className="text-gray-300 mb-8">Your payment has been verified.</p>

        <div className="space-y-4 text-left">
          <div className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400 text-xs uppercase">Transaction ID</span>
            <span className="font-mono text-sm">{paymentId}</span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-3">
            <span className="text-gray-400 text-xs uppercase">Payment Method</span>
            <span>Razorpay</span>
          </div>

          <div className="flex justify-between">
            <span className="text-gray-400 text-xs uppercase">Status</span>
            <span className="text-green-400 font-medium">Confirmed</span>
          </div>
        </div>

        <Link
          href="/"
          prefetch={false}  // prevents unnecessary router prefetch warnings
          className="mt-10 inline-flex items-center gap-3 bg-white text-black px-8 py-3 rounded-full font-medium uppercase tracking-wider hover:scale-105 transition"
        >
          Go Home
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>

      <div className="absolute bottom-8 text-gray-600 tracking-[0.3em] uppercase text-sm">
        TEDxKIET
      </div>
    </div>
  );
}
