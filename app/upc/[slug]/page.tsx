/*This is a Next.js page component that shows the details of a single book based on its upc value, which is passed as a parameter in the URL slug. Here's how the code works:

It imports the supabase object from a utility file, which is used to connect to the Supabase database.
It defines a function component called BookDetailPage that receives an object containing the slug parameter.
The function makes a query to the book table of the database using the upc value passed in the parameter.
If there's an error with the query, the function throws an error.
If no data is returned by the query, the function throws another error.
If more than one book is found, the function throws a third error.
If the query returns one book, the function assigns its information to a variable called bookInfo.
The component returns an article element that displays the book information in HTML format, including the title, rating, price, UPC, and description. If the book has an image link, it's also displayed.*/

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
