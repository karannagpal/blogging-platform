import React from "react";

async function BlogEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  return (
    <div>
      <small>This will be a single blog page</small>
      <div> it will be about {slug}</div>
    </div>
  );
}

export default BlogEntryPage;
