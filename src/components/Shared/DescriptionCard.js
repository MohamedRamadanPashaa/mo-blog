import classes from "./DescriptionCard.module.css";

export default function DescriptionCard({ title, description }) {
  return (
    <div className={classes["card"]}>
      <h3 className={classes["title"]}>{title}</h3>
      <p className={classes["description"]}>{description}</p>
    </div>
  );
}
