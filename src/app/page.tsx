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
        <section>a grid of most recent blogs come here</section>
        <section>about the author/publication company</section>
      </main>
      <Footer />
    </>
  );
}
