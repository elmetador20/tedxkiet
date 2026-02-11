import crypto from "node:crypto";
import { prisma } from "@/lib/prisma";

export async function POST(req) {
  const rawBody = await req.text();
  const signature = req.headers.get("x-razorpay-signature");

  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET)
    .update(rawBody)
    .digest("hex");

  if (expectedSignature !== signature) {
    return new Response("Invalid signature", { status: 400 });
  }

  const data = JSON.parse(rawBody);

  if (data.event === "payment.captured") {
    const payment = data.payload.payment.entity;

    await prisma.order.update({
      where: { razorpayOrderId: payment.order_id },
      data: {
        status: "PAID",
        razorpayPaymentId: payment.id,
      },
    });
  }

  return new Response("OK", { status: 200 });
}
