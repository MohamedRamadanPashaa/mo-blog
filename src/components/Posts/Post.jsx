import Link from "next/link";

import classes from "./Post.module.css";

const Post = ({ text, _id }) => {
  return (
    <section className={classes["post"]}>
      <p>{text.slice(0, 10)}...</p>
      <Link href={`/blog/posts/${_id}`} className="link">
        More
      </Link>
    </section>
  );
};

export default Post;
