import { useAppSelector } from "@src/app/hooks";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Switchbackground } from "../SwitchBackground";
import styles from "./styles.module.scss";
import cn from "classnames";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Layout: React.FC<{ children: any }> = ({ children }) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <div className={styles.container}>
      <Header />
      <Navbar />
      <div className={cn(styles.content, { [styles.lightMode]: isLightMode })}>
        {children}
      </div>
      <Switchbackground />
    </div>
  );
};
