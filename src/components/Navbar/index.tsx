import React from "react";
import Container from "@/components/Container";

function Navbar() {
  return (
    <nav className="bg-neutral-100 py-2">
      <Container>
        <div className="flex justify-between">
          <div className="font-bold">Blogging platform core</div>
          <div className="flex gap-2">
            <div>About</div>
            <div>Blogs</div>
          </div>
        </div>
      </Container>
    </nav>
  );
}

export default Navbar;
