import Header from "@/components/Header";
import BlogOverview from "@/components/BlogOverview";
import { getAllBlogposts } from "@/controllers/blogpostController";

export default function Home() {
  const allBlogposts = getAllBlogposts();
  return (
    <>
      <small>this is the landing page</small>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section>the main artwork comes here</section>
        <Header />
        <section>about the web site</section>
        <section>
          <div className="text-sm"> a grid of most recent blogs come here</div>
          <div className="flex gap-2">
            {allBlogposts.map((blogpost) => {
              return (
                <BlogOverview
                  key={blogpost.blog_id}
                  title={blogpost.title}
                  author={blogpost.author}
                  cover_image={blogpost.cover_image}
                />
              );
            })}
          </div>
        </section>
        <section>about the author/publication company</section>
      </main>
    </>
  );
}
