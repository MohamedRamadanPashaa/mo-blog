import Link from "next/link";

export default function BlogPage() {
  return (
    <section>
      <h1>Blog Page</h1>
      <Link href="/blog/posts" className="link">
        Posts
      </Link>
    </section>
  );
}
