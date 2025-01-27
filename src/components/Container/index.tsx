import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-(--breakpoint-md) mx-auto text-accent-900">
      {children}
    </div>
  );
}

export default Container;
