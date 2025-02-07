import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-lg md:max-w-3xl xl:max-w-7xl mx-auto text-accent-900 px-4">
      {children}
    </div>
  );
}

export default Container;
