import DescriptionCard from "../Shared/DescriptionCard";
import { MY_SKILLS_DATA } from "@/data/my-skills-data";

import classes from "./MySkills.module.css";

export default function MySkills() {
  return (
    <section className={classes["my-skills"]}>
      <h2>My Skills</h2>
      {MY_SKILLS_DATA.map((skill, i) => {
        const { title, description } = skill;

        return (
          <DescriptionCard key={i} title={title} description={description} />
        );
      })}
    </section>
  );
}
