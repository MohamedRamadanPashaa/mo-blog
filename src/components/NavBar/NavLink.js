"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import classes from "./NavLink.module.css";

export default function NavLink({ href, text }) {
  const pathname = usePathname();

  const isActive =
    pathname === "/"
      ? pathname === href
      : pathname.startsWith(href) && href !== "/";

  return (
    <li>
      <Link className={isActive ? classes["active"] : ""} href={href}>
        {text}
      </Link>
    </li>
  );
}
