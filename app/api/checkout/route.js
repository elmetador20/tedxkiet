import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { prisma } from "@/lib/prisma";
import { z } from "zod";
import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// ⭐ Only initialize Redis in production
const redis =
  process.env.NODE_ENV === "production"
    ? new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      })
    : null;

// ⭐ Rate limit – only active in production
const ratelimit =
  process.env.NODE_ENV === "production"
    ? new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(5, "1 m"),
      })
    : null;

// ⭐ ZOD SCHEMA
const CheckoutSchema = z.object({
  amount: z.number().positive().max(500000),
  name: z.string().trim().min(2).max(50),
  email: z.string().email(),
  rollNo:z.string().trim(),
  branch:z.string().trim().min(2).max(30),
  phone: z.string().regex(/^[0-9]{10}$/),
});

export async function POST(req) {
  try {
    // ⭐ Apply rate-limiting in production only
    if (ratelimit) {
      const ip = req.headers.get("x-forwarded-for") || "unknown";
      const { success } = await ratelimit.limit(ip);

      if (!success) {
        return NextResponse.json(
          { error: "Too many requests. Try again later." },
          { status: 429 }
        );
      }
    }

    const body = await req.json();

    // ⭐ Validate input
    const safeBody = CheckoutSchema.safeParse(body);
    if (!safeBody.success) {
      return NextResponse.json(
        { error: "Invalid input data" },
        { status: 400 }
      );
    }

    const { amount, name, email, phone ,rollNo,branch } = safeBody.data;

    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    };

    const order = await razorpay.orders.create(options);

    await prisma.order.create({
      data: {
        razorpayOrderId: order.id,
        amount,
        currency: "INR",
        userName: name,
        userEmail: email,
        userPhone: phone,
        rollNo: rollNo,
        branch: branch,
        status: "PENDING",
      },
    });

    return NextResponse.json({ order });
  } catch (err) {
    console.error("Checkout API Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
