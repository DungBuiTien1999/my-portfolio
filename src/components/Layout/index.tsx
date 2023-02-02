import { Header } from "../Header";
import { Navbar } from "../Navbar";
import styles from "./styles.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      {children}
    </div>
  );
};
