import { useAppDispatch, useAppSelector, useShowBackBtn } from "@src/app/hooks";
import { changeDarkMode } from "@src/features/common/commonSlice";
import styles from "./styles.module.scss";
import cn from "classnames";
import { LOCAL_STORE_NAME } from "@src/common/constant";

export const Switchbackground: React.FC = () => {
  const { isShow, handleBack } = useShowBackBtn();
  const dispatch = useAppDispatch();
  const { isLightMode } = useAppSelector((state) => state.common);
  const handleClick = () => {
    if (isLightMode) localStorage.removeItem(LOCAL_STORE_NAME.ISLIGHTMODE);
    else localStorage.setItem(LOCAL_STORE_NAME.ISLIGHTMODE, "true");
    dispatch(changeDarkMode());
  };
  return (
    <div className={styles.container}>
      <button
        onClick={handleClick}
        className={cn(styles.switchButton, { [styles.lightMode]: isLightMode })}
      >
        <i className="fa-solid fa-moon"></i>
      </button>
      {isShow && (
        <button
          onClick={handleBack}
          className={cn(styles.switchButton, {
            [styles.lightMode]: isLightMode,
          })}
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      )}
    </div>
  );
};
