import Link from "next/link";
import React from "react";
import { ROUTES } from "@/constants";
import Container from "@/components/Container";

function Footer() {
  return (
    <footer className="bg-neutral-100 py-2">
      <Container>
        <div className="flex justify-between">
          <Link href={ROUTES.HOMEPAGE} className="font-bold">
            Blogging platform core
          </Link>
          <div className="flex gap-2">
            <Link href={ROUTES.ABOUT}>About</Link>
            <Link href={ROUTES.CATALOG}>Blogs</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
