"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  console.log(path);
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>{" "}
          {path === "/about-us" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us/company/jobs/sales">Sales</Link>{" "}
          {path === "/about-us/company/jobs/sales" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/movies/121212?region=kr&page=2">Movie</Link>
        </li>
      </ul>
    </nav>
  );
}
