import React from "react";
import Image from "next/image";
import { getBlogBySlug } from "@/controllers/blogpostController";

async function BlogEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const blogpost = getBlogBySlug(slug);

  const { author, title, cover_image, blog_content } = blogpost || {};

  return (
    <div className="my-16 p-4">
      <div className="relative text-white text-jumbo z-10 text-shadow-md">
        {title}
      </div>
      <div className="text-white relative text-sm z-10 text-shadow-md">
        By: {author}
      </div>
      <div className="relative overflow-hidden h-80 md:h-[500px] xl:h-[800px] blur-md brightness-75 rounded-3xl contrast-75 -top-16 -m-4">
        <Image
          src={cover_image || ""}
          alt={title || ""}
          fill
          className="mx-auto"
        />
      </div>

      <div className="text-base">
        {blog_content === ""
          ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate minima quisquam delectus explicabo magni dolore rerum ab natus libero veniam facilis itaque laboriosam, repudiandae odio tempore recusandae enim voluptatibus, quibusdam minus fugit doloribus, fuga aliquam? Quas illum quis eum a, consectetur veritatis repellat quo, id maiores, nemo saepe ipsam quia. Totam deleniti voluptates officiis consequuntur eaque obcaecati repellat veniam rem iste, cumque autem? Optio aliquid animi amet neque iusto, inventore nostrum numquam laboriosam illo doloribus ullam ipsum porro qui. Saepe a temporibus fugiat quaerat sit. Voluptatum nobis animi doloremque nam nesciunt laudantium temporibus placeat non quidem eligendi eveniet totam, tempora omnis incidunt eum blanditiis perspiciatis sed explicabo maxime veritatis, aliquid aspernatur numquam? Quos, at sapiente. Praesentium, repudiandae adipisci vitae exercitationem unde impedit, labore iure culpa iste consectetur minima quia neque cum tempore nemo, repellat non eius quam odio delectus dolorem! In voluptatum ratione perferendis aspernatur eos, perspiciatis doloremque voluptates dignissimos, eius placeat neque dolorum nostrum autem, voluptatibus nam eveniet! Nihil dolores unde iste repudiandae voluptates, illo quos consequatur impedit, dolorem ad repellendus incidunt cumque, quibusdam quis ullam aliquam esse iusto perferendis! Totam ut odit numquam soluta dolore magnam quam veniam sunt maiores voluptates repellendus asperiores labore minima, nihil doloremque. Numquam."
          : blog_content}
      </div>
    </div>
  );
}

export default BlogEntryPage;
