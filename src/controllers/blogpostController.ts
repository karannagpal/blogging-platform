import blogposts from "@/data/blogposts.json";
import { Blogpost } from "@/models/Blogpost";

export const getAllBlogposts = () => blogposts as Blogpost[];
