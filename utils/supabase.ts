import { createClient } from "@supabase/supabase-js";
import { Database } from "@/utils/types/supabase";

const supabaseUrl = "https://hvdhuiojsexdmqthrila.supabase.co";
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
export const supabase = createClient<Database>(supabaseUrl, supabaseKey);
