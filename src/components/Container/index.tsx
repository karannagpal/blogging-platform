import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-screen-md mx-auto">{children}</div>;
}

export default Container;
