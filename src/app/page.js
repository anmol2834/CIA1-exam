
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
    <div className="page-container">
      <Link href="/dashboard" className="buttons">got to dashboard</Link>
    </div>
    </>
  );
}
