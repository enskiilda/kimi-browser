import { NextResponse } from "next/server";

// Note: Kernel SDK doesn't provide an API to list browser pages.
// This endpoint returns an empty array, which causes the BrowserTabs
// component to gracefully hide the tabs UI.
export async function GET(
  _request: Request,
  context: { params: Promise<{ sessionId: string }> }
) {
  try {
    if (!context?.params) {
      return NextResponse.json({ error: "Invalid session ID" }, { status: 400 });
    }

    const resolvedParams = await context.params;
    if (!resolvedParams?.sessionId) {
      return NextResponse.json(
        { error: "Session ID not found" },
        { status: 400 }
      );
    }

    // Return empty pages array - Kernel doesn't support listing pages
    // The UI will gracefully handle this by hiding the tabs
    return NextResponse.json({ pages: [] });
  } catch (error) {
    console.error("Error getting pages:", error);
    return NextResponse.json({ error: "Failed to get pages" }, { status: 500 });
  }
}
