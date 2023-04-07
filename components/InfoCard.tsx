import React from "react";
import type { Database } from "@/utils/types/supabase";

const InfoCard = ({
  data,
}: {
  data: Database["public"]["Tables"]["book"]["Row"];
}) => {
  return (
    <div className="card image-full h-96 w-64 bg-base-content shadow-xl">
      <figure>
        {data.image_link && <img src={data.image_link} alt="Shoes" />}
      </figure>
      <div className="card-body justify-end">
        <h2 className="card-title">{data.title}</h2>
        <h2 className="text-end font-mono text-xl">{data.price}</h2>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Details</button>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
