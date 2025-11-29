import { POSTS } from "@/data/posts";
import { notFound } from "next/navigation";

const PostPage = async ({ params }) => {
  const { postId } = await params;
  const post = POSTS.find((p) => p._id === postId);

  if (!post) {
    return notFound();
  }

  const { _id, text } = post;

  return (
    <section>
      <p>{text}</p>
    </section>
  );
};

export default PostPage;
