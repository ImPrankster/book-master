import { supabase } from "@/utils/supabase";
import { NextResponse } from "next/server";
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  if (searchParams.has("upc")) {
    const { data, error } = await supabase
      .from("book")
      .select("*")
      .eq("upc", searchParams.get("upc"));
    if (error) {
      return NextResponse.error();
    }
    return NextResponse.json(data);
  } else if (searchParams.has("category")) {
    const { data, error } = await supabase
      .from("book")
      .select("*")
      .eq("category", searchParams.get("category"));
    if (error) {
      return NextResponse.error();
    }
    return NextResponse.json(data);
  }
  return NextResponse.error();
}
