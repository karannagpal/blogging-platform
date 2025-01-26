import BlogOverview from "@/components/BlogOverview";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
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
            <BlogOverview
              title="Whats in my travel bag"
              author="Karan Nagpal"
              cover_image={"/img.png"}
            />
            <BlogOverview
              title="Easy one pot recipe"
              author="Karan Nagpal"
              cover_image={"/img.png"}
            />
            <BlogOverview
              title="taking better photos with your phone"
              author="Karan Nagpal"
              cover_image={"/img.png"}
            />
          </div>
        </section>
        <section>about the author/publication company</section>
      </main>
      <Footer />
    </>
  );
}
