/*This is a TypeScript code that defines an HTTP GET endpoint function. The function receives an HTTP request object (req) as an input parameter and returns a response object.

The code uses two import statements to import supabase utility and NextResponse object from two different modules.

The function first extracts the query parameters from the request URL using the URL constructor and then checks if the upc or category parameter is present in the query parameters.

If the upc parameter is present, the function queries the book table using supabase utility, filters the results by upc parameter value, and returns a JSON response containing the book data. If the category parameter is present, the function queries the book table using supabase utility, filters the results by category parameter value, and returns a JSON response containing the book data.

If none of the query parameters is present, the function returns an error response.*/

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
