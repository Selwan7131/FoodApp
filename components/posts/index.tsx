import Post from "../post";
import styles from "./styles.module.scss";

function Posts() {
  return (
    <ul>
      <Post author="Max" text="React is awesome!" />
      <Post author="Ben" text="Check the course!" />
    </ul>
  );
}

export default Posts;
