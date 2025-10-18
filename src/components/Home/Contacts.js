import Link from "next/link";

import classes from "./Contacts.module.css";

export default function Contacts() {
  return (
    <section className={classes["welcome"]}>
      <h3 className={classes["title"]}>Contact info</h3>
      <ul className={classes["info"]}>
        <li>
          email: <Link href="mailto:test@test.com">test@test.com</Link>
        </li>
        <li>phone: 015214521551</li>
        <li>
          facebook:{" "}
          <Link href="facebook.com/mo" target="_blank">
            facebook.com/mo
          </Link>
        </li>
      </ul>
    </section>
  );
}
