import Post from "@/components/Posts/Post";
import { POSTS } from "@/data/posts";
import Link from "next/link";

export default function PostsPage() {
  return (
    <div>
      <Link href="/blog" className="link">
        Blog
      </Link>
      <h1>Posts Page</h1>

      {POSTS.map((post) => {
        const { _id, text } = post;

        return <Post key={_id} _id={_id} text={text} />;
      })}
    </div>
  );
}
