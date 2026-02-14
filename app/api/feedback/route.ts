import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Replace this with your Google App Script URL
    const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxh0DlZ9Q-IvNrnVFFjVUO6ntnP9rkQiSp9Da04s-1eGVbetxVB27NOx9kfMYIibATvUQ/exec";

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}