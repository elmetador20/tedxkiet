import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    if (!token) {
      return NextResponse.json({ valid: false });
    }

    let decoded;
    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch {
      return NextResponse.json({ valid: false });
    }

    if (!decoded.paid || !decoded.orderId) {
      return NextResponse.json({ valid: false });
    }

    return NextResponse.json({ valid: true, data: decoded });

  }  catch (e) {
  console.error("Checkout Error:", e);

  return NextResponse.json(
    { success: false, error: "Internal server error" },
    { status: 500 }
  );
  }}
  
