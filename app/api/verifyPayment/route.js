import crypto from "node:crypto";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import { sendEmail } from "@/lib/sendEmail";
import { paymentSuccessEmail } from "@/emails/paymentSuccess";
import { NextResponse } from "next/server";
import { z } from "zod";

//  ZOD SCHEMA
const VerifySchema = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

export async function POST(req) {
  try {
    const body = await req.json();

    const valid = VerifySchema.safeParse(body);
    if (!valid.success) {
      return NextResponse.json(
        { success: false, error: "Invalid verification data" },
        { status: 400 }
      );
    }

    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
      valid.data;

    // Prevent double processing
    const existingOrder = await prisma.order.findUnique({
      where: { razorpayOrderId: razorpay_order_id },
    });

    if (!existingOrder) {
      return NextResponse.json({ success: false });
    }

    if (existingOrder.status === "PAID") {
      return NextResponse.json({ success: true, alreadyProcessed: true });
    }

    const data = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(data)
      .digest("hex");

    const verified = expectedSignature === razorpay_signature;

    //  Update DB
    const updated = await prisma.order.update({
      where: { razorpayOrderId: razorpay_order_id },
      data: {
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: verified ? "PAID" : "FAILED",
      },
    });

    if (verified) {
      const token = jwt.sign(
        {
          paid: true,
          orderId: updated.razorpayOrderId,
        },
        process.env.JWT_SECRET,
        { expiresIn: "10m" }
      );

      // Send Email
      sendEmail({
        to: updated.userEmail,
        subject: "Payment Successful",
        html: paymentSuccessEmail({
          name: updated.userName,
          amount: updated.amount,
          paymentId: razorpay_payment_id,
        }),
      });

     return NextResponse.json({
  success: true,
  token,
  paymentId: razorpay_payment_id, // ⭐ ADD THIS
});
    }

    return NextResponse.json({ success: false });

  } catch (err) {
    console.error("Verify API Error:", err);
    return NextResponse.json(
      { success: false, error: "Internal verification error" },
      { status: 500 }
    );
  }
}
