import { supabase } from "@/utils/supabase";

const BookDetailPage = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const { data, error } = await supabase
    .from("book")
    .select("*")
    .eq("upc", params.slug);

  if (error) {
    throw error;
  }

  if (!data) {
    throw new Error("No data found");
  }

  if (data.length > 1) {
    throw new Error("More than one book found");
  }

  const bookInfo = data[0];

  return (
    <article className="prose m-8 md:prose-xl lg:mx-24">
      {bookInfo.image_link && (
        <img className="w-80" src={bookInfo.image_link} />
      )}
      <h1>{bookInfo.title}</h1>
      <div>
        {bookInfo.rating &&
          [...Array(bookInfo.rating)].map((_, i) => (
            <i className="material-icons text-3xl text-secondary" key={i}>
              star_rate
            </i>
          ))}
      </div>
      <h3 className="font-mono">£{bookInfo.price}</h3>
      <h3 className="font-mono">UPC: {bookInfo.upc}</h3>
      <p>{bookInfo.description}</p>
    </article>
  );
};

export default BookDetailPage;
