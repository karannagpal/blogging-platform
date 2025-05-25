import React from "react";
import Image from "next/image";

function BlogOverviewCard({
  title,
  author,
  cover_image,
}: {
  title: string;
  author: string;
  cover_image: string;
}) {
  const image_url = cover_image === "" ? "placeholder.svg" : cover_image;
  return (
    <div className="shadow-md p-4 min-h-56 rounded-xl bg-white">
      <div className="relative overflow-hidden mx-auto h-32 xl:h-44 rounded-md">
        <Image src={image_url} alt={title} fill className="mx-auto" />
      </div>
      <div className="text-base h-14 mt-2">{title}</div>
      <div className="text-sm text-accent-100">by: {author}</div>
    </div>
  );
}

export default BlogOverviewCard;
