import { RootState } from "@src/app/store";
import { setShowNav } from "@src/features/common/commonSlice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { isShowNav } = useSelector((state: RootState) => state.common);
  const handleClick = () => {
    dispatch(setShowNav(!isShowNav));
  };
  return (
    <header className={styles.container}>
      <Link className={styles.logo} href="/">
        GBTDUN
      </Link>
      <div onClick={handleClick} className={styles.togglerMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};
