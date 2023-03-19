import styles from "./style.module.css";

interface TextProps {
  text: string;
}

const Text: React.FunctionComponent<TextProps> = ({ text }) => {
  return (
    <p className={styles.text} dangerouslySetInnerHTML={{ __html: text }} />
  );
};

export default Text;
