import type { Database } from "@/utils/types/supabase";
import Link from "next/link";

const InfoCard = ({
  data,
}: {
  data: Database["public"]["Tables"]["book"]["Row"];
}) => {
  return (
    <div className="card image-full m-2 h-96 w-64 bg-base-content shadow-xl">
      <figure>
        {data.image_link && <img src={data.image_link} alt="Shoes" />}
      </figure>
      <div className="card-body justify-end">
        <h2 className="max-h-36 overflow-y-auto text-lg font-semibold">
          {data.title}
        </h2>
        <h2 className="text-end font-mono text-xl">£{data.price}</h2>
        <div className="card-actions justify-end">
          <Link href={"/upc/" + data.upc} className="btn-primary btn">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
