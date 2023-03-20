import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { Header } from "../Header";
import { Navbar } from "../Navbar";
import { Switchbackground } from "../SwitchBackground";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useEffect } from "react";
import { LOCAL_STORE_NAME } from "@src/common/constant";
import { changeDarkMode } from "@src/features/common/commonSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Layout: React.FC<{ children: any }> = ({ children }) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (localStorage.getItem(LOCAL_STORE_NAME.ISLIGHTMODE) && !isLightMode) {
      dispatch(changeDarkMode(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
