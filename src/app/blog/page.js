import Link from "next/link";

export default function BlogPage() {
  return (
    <>
      <h1>Blog Page</h1>
      <Link href="/blog/posts">Posts</Link>
    </>
  );
}
