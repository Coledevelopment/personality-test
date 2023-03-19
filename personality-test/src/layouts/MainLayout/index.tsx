import styles from "./styles.module.css";
import Title from "../../components/Title";
import Text from "../../components/Text";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FunctionComponent<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <Title level={4} text={"Hello"}></Title>
      </div>
      <div className={styles.content}>{children}</div>
      <div className={styles.footer}>
        <Title level={4} text={"Hello"}></Title>
      </div>
    </div>
  );
};

export default MainLayout;
