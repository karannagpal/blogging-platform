import Image from "next/image";
import React from "react";

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
    <div className="border border-gray-500">
      <Image src={image_url} alt={title} width={200} height={100} />
      <div className="text-lg">{title}</div>
      <div className="text-base">by: {author}</div>
    </div>
  );
}

export default BlogOverview;
