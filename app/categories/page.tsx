import { supabase } from "@/utils/supabase";
import Link from "next/link";

const CategoriesPage = async () => {
  const { data, error } = await supabase.from("category").select("category");

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("No data found");
  }

  return (
    <main>
      <label className="p-5 text-5xl font-bold">Categories</label>
      <section className="rounded-box m-4 flex h-full flex-wrap justify-center p-4">
        {data.map((entry, i) => {
          if (entry.category) {
            return (
              <Link
                href={"/categories/" + entry.category.replaceAll(" ", "-")}
                className="card m-2 bg-primary shadow-2xl ring-base-300 ring-offset-1 hover:ring-4 focus:bg-primary-focus"
                key={i}
              >
                <div className="card-body justify-end">
                  <h2 className="card-title text-base-content">
                    {entry.category}
                  </h2>
                </div>
              </Link>
            );
          }
        })}
      </section>
    </main>
  );
};

export default CategoriesPage;
