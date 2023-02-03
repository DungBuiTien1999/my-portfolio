import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { RootState } from "@src/app/store";
import { setShowNav } from "@src/features/common/commonSlice";
import Link from "next/link";
import styles from "./styles.module.scss";
import cn from "classnames";

export const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const { isShowNav } = useAppSelector((state: RootState) => state.common);
  const { isLightMode } = useAppSelector((state) => state.common);
  const handleClick = () => {
    dispatch(setShowNav(!isShowNav));
  };
  return (
    <header
      className={cn(styles.headerTop, { [styles.lightMode]: isLightMode })}
    >
      <div className={styles.container}>
        <Link className={styles.logo} href="/">
          GBTDUN
        </Link>
        <div onClick={handleClick} className={styles.togglerMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};
