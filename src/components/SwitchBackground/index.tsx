import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { changeDarkMode } from "@src/features/common/commonSlice";
import styles from "./styles.module.scss";
import cn from "classnames";

export const Switchbackground = () => {
  const dispatch = useAppDispatch();
  const { isLightMode } = useAppSelector((state) => state.common);
  const handleClick = () => {
    dispatch(changeDarkMode());
  };
  return (
    <button
      onClick={handleClick}
      className={cn(styles.switchButton, { [styles.lightMode]: isLightMode })}
    >
      <i className="fa-solid fa-moon"></i>
    </button>
  );
};
