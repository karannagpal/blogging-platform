import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Blogging Platfrom Core",
  description: "Blogging platform made using NextJS, Tailwind and TypeScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased bg-gray-200`}>
        <Navbar />
        <Container>{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
