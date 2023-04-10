import InfoCard from "@/components/InfoCard";
import { supabase } from "@/utils/supabase";

const CategoriesInnerPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { data, error } = await supabase
    .from("book")
    .select("*")
    .eq("category", params.slug.replaceAll("-", " "))
    .range(0, 50);

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("No data found");
  }

  return (
    <main>
      <div className="mt-4">
        <label htmlFor="" className="p-5 text-5xl font-bold italic">
          {params.slug.replaceAll("-", " ")}
        </label>
        <section className="rounded-box m-4 flex h-full flex-wrap justify-center p-4">
          {data.map((info) => (
            <InfoCard data={info} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default CategoriesInnerPage;
