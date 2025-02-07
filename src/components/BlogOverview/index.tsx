import React from "react";
import Image from "next/image";

function BlogOverview({
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
    <div className="shadow-md p-4 min-h-56 rounded-lg bg-white">
      <Image src={image_url} alt={title} width={200} height={100} />
      <div className="text-lg">{title}</div>
      <div className="text-base">by: {author}</div>
    </div>
  );
}

export default BlogOverview;
