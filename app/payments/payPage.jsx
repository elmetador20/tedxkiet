"use client";

import { useState } from "react";
import PayButton from "@/components/payButton";

export default function PaymentPage() {
  const [form, setForm] = useState({
    amount: "",
    name: "",
    email: "",
    phone: "",
    rollNo:"",
    branch:""
  });

  function updateField(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const isValid =
    Number(form.amount) > 0 &&
    form.name.trim() &&
    form.email.trim() &&
    form.rollNo &&
    form.branch &&
    form.phone.trim();

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white px-6 py-12">
      {/* Outer Container */}
      <div className="w-full max-w-lg backdrop-blur-xl bg-white/5 border border-white/10 shadow-lg rounded-2xl p-10">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold tracking-wider">
            <span className="text-red-600">TEDx</span> Payment
          </h1>
          <p className="text-gray-300 mt-2 text-sm tracking-wide">
            Secure your spot for this year’s TEDxKIET Event
          </p>
        </div>

        {/* NAME */}
        <div className="mb-6">
          <label className="block mb-1 text-gray-300 font-medium">Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={updateField}
            className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 outline-none text-white placeholder-gray-500"
          />
        </div>

        {/* EMAIL */}
        <div className="mb-6">
          <label className="block mb-1 text-gray-300 font-medium">Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={updateField}
            className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 outline-none text-white placeholder-gray-500"
          />
        </div>

        {/* PHONE */}
        <div className="mb-6">
          <label className="block mb-1 text-gray-300 font-medium">Phone Number</label>
          <input
            name="phone"
            type="tel"
            placeholder="Enter your phone number"
            value={form.phone}
            onChange={updateField}
            className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 outline-none text-white placeholder-gray-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-300 font-medium">Roll No</label>
          <input
            name="rollNo"
            type="text"
            placeholder="Enter your Roll  number"
            value={form.rollNo}
            onChange={updateField}
            className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 outline-none text-white placeholder-gray-500"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-1 text-gray-300 font-medium">your branch</label>
          <input
            name="branch"
            type="text"
            placeholder="Enter your branch"
            value={form.branch}
            onChange={updateField}
            className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 outline-none text-white placeholder-gray-500"
          />
        </div>

        {/* AMOUNT */}
        <div className="mb-8">
          <label className="block mb-1 text-gray-300 font-medium">Amount (₹)</label>
          <input
            name="amount"
            type="number"
            placeholder="Enter amount"
            value={form.amount}
            onChange={updateField}
            className="w-full px-4 py-2 bg-black/40 border border-gray-700 rounded-md focus:ring-2 focus:ring-red-600 outline-none text-white placeholder-gray-500"
          />
        </div>

        {/* BUTTON */}
        <div className="mt-6">
          {isValid ? (
            <PayButton
              amount={Number(form.amount)}
              name={form.name}
              email={form.email}
              phone={form.phone}
              rollNo={form.rollNo}
              branch={form.branch}
            />
          ) : (
            <button className="w-full px-5 py-3 bg-gray-600 text-gray-300 rounded-md cursor-not-allowed font-semibold tracking-wide">
              Fill all fields
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
