import { supabase } from "@/utils/supabase";

import InfoCard from "@/components/InfoCard";
import Link from "next/link";

export default async function Home() {
  //retrive the data
  const { data, error } = await supabase
    .from("book")
    .select("*")
    .order("created_at", { ascending: false })
    .range(0, 9);

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("No data found");
  }

  const { data: categoryData, error: categoryError } = await supabase
    .from("category")
    .select("category");

  if (categoryError) {
    throw error;
  }

  if (!categoryData) {
    throw new Error("No data found");
  }

  return (
    <main>
      <article className="w-full text-center">
        <h1 className="text-5xl font-black">Book Master</h1>
        <h2 className="text-2xl font-bold">- A place for all your books -</h2>
      </article>
      <div className="mt-4">
        <label htmlFor="" className="p-5 text-2xl font-bold italic">
          Newly added
        </label>
        <section className="rounded-box grid h-full grid-flow-col space-x-4 overflow-x-auto">
          {data.map((info, i) => (
            <InfoCard data={info} key={i} />
          ))}
        </section>
      </div>
      <div className="mt-8">
        <label htmlFor="" className="p-5 text-2xl font-bold italic">
          Categories
        </label>
        <div className="rounded-box flex h-full flex-wrap justify-center p-4">
          {categoryData.map((entry, i) => {
            if (entry.category) {
              return (
                <Link
                  href={"/categories/" + entry.category.replaceAll(" ", "-")}
                  className="btn-ghost btn"
                  key={i}
                >
                  {entry.category}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </main>
  );
}
