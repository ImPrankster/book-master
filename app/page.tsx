import { supabase } from "../utils/supabase";

import InfoCard from "@/components/InfoCard";

export default async function Home() {
  //retrive the data
  const { data, error } = await supabase.from("book").select();

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("No data found");
  }

  return (
    <main>
      <article className="w-full text-center">
        <h1 className="text-5xl font-black">Book Master</h1>
        <h2 className="text-2xl font-bold">- A place for all your books -</h2>
      </article>
      <div className="mt-4">
        <label htmlFor="" className="p-5 text-xl font-bold italic">
          Newly released
        </label>
        <section className="rounded-box h-full p-4">
          {data.map((info) => (
            <InfoCard data={info} />
          ))}
        </section>
      </div>
    </main>
  );
}
