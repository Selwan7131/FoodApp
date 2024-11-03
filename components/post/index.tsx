import styles from "./styles.module.scss";

interface Props {
  author: string;
  text: string;
}

function Post(props: Props) {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.text}</p>
    </div>
  );
}

export default Post;
