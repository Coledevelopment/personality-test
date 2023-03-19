import styles from "./styles.module.css";

interface TitleProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  text: string;
}

const Title: React.FunctionComponent<TitleProps> = ({ level, text }) => {
  return (
    <>
      {level === 1 && <h1 className={styles.h1}>{text}</h1>}
      {level === 2 && <h2 className={styles.h2}>{text}</h2>}
      {level === 3 && <h3 className={styles.h3}>{text}</h3>}
      {level === 4 && <h4 className={styles.h4}>{text}</h4>}
      {level === 5 && <h5 className={styles.h5}>{text}</h5>}
      {level === 6 && <h6 className={styles.h6}>{text}</h6>}
    </>
  );
};

export default Title;
