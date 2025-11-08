import classes from "./Welcome.module.css";

const Welcome = () => {
  return (
    <section className={classes["welcome"]}>
      <h1 className={classes["title"]}>MO Blog</h1>

      <p>Hello this blog will teach you web programming from zero</p>
    </section>
  );
};

export default Welcome;
