import { BLOG_TAGS } from "@/enums";

export type Blogpost = {
  blog_id: string;
  title: string;
  slug: string;
  author: string;
  date_published: string;
  cover_image: string;
  blog_content: string;
  tags: BLOG_TAGS[];
};
