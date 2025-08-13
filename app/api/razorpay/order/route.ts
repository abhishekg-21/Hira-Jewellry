import { NextRequest, NextResponse } from "next/server";
import { razorpay } from "@/src/lib/razorpay";

export async function POST(req: NextRequest) {
  try {
    const { amountPaise, cart, customer } = await req.json();

    if (!Number.isInteger(amountPaise) || amountPaise < 1) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    // (Optional) Recompute amount on server from `cart` to prevent tampering.

    const order = await razorpay.orders.create({
      amount: amountPaise,          // paise
      currency: "INR",
      receipt: `rcpt_${Date.now()}`,
      notes: {
        cart: cart ? JSON.stringify(cart).slice(0, 5000) : "",
        email: customer?.email || "",
      },
    });

    return NextResponse.json({
      id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (e: any) {
    return NextResponse.json({ error: e.message || "Order create failed" }, { status: 500 });
  }
}
