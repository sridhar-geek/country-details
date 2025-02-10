import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), "data.json");

    const fileContents = await fs.readFile(jsonDirectory, "utf8");

    return NextResponse.json(JSON.parse(fileContents));
  } catch (error) {
    console.error("Error reading or parsing data.json:", error);
    return new Response("Failed to read or parse the JSON file", {
      status: 500,
    });
  }
}
