import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const SHEET_TAB = process.env.GOOGLE_SHEET_TAB ?? "시트1";

function nowKST(): string {
  return new Date().toLocaleString("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { name, phone, birth, message } = await req.json();

    if (!name || !phone || !birth) {
      return NextResponse.json({ error: "필수 항목이 누락되었습니다." }, { status: 400 });
    }

    const privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n");

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
        private_key: privateKey,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `${SHEET_TAB}!A:E`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[nowKST(), name, phone, birth, message ?? ""]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact API]", err);
    return NextResponse.json({ error: "서버 오류가 발생했습니다." }, { status: 500 });
  }
}
