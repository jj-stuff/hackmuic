import { NextResponse } from "next/server";

function disabled() {
  return NextResponse.json(
    { message: "Invitation endpoints are currently disabled." },
    { status: 404 },
  );
}

export function GET() {
  return disabled();
}

export function POST() {
  return disabled();
}
