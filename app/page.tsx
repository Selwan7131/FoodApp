import NewPost from "@/components/post-modal";
import styles from "./page.module.css";
import Posts from "@/components/posts";

export default function Home() {
  return (
    <main className={styles.main}>
      <NewPost />
      <Posts />
    </main>
  );
}
