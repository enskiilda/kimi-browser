import Kernel from "@onkernel/sdk";
import { NextResponse } from "next/server";

async function createSession() {
  const kernel = new Kernel({
    apiKey: process.env.KERNEL_API_KEY!,
  });

  const browser = await kernel.browsers.create({
    stealth: true,
    viewport: {
      width: 1920,
      height: 1080,
    },
  });

  console.log("Created Kernel browser session:", browser.session_id);
  console.log("Live view URL:", browser.browser_live_view_url);

  return {
    session: browser,
  };
}

async function endSession(sessionId: string) {
  const kernel = new Kernel({
    apiKey: process.env.KERNEL_API_KEY!,
  });
  await kernel.browsers.deleteByID(sessionId);
}

export async function POST() {
  try {
    const { session } = await createSession();

    return NextResponse.json({
      success: true,
      sessionId: session.session_id,
      sessionUrl: session.browser_live_view_url,
      cdpWsUrl: session.cdp_ws_url,
    });
  } catch (error) {
    console.error("Error creating session:", error);
    return NextResponse.json(
      { success: false, error: "Failed to create session" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const body = await request.json();
  const sessionId = body.sessionId as string;
  await endSession(sessionId);
  return NextResponse.json({ success: true });
}
