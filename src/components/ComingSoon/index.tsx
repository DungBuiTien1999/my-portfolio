import styles from "./styles.module.scss";
import cn from "classnames";
import "animate.css";
import { useAppSelector } from "@src/app/hooks";
import { useRouter } from "next/router";

export const ComingSoon: React.FC = () => {
  const { isLightMode } = useAppSelector((state) => state.common);
  const router = useRouter();
  return (
    <div className={cn(styles.container, { [styles.lightMode]: isLightMode })}>
      <h1 className="animate__animated animate__fadeInRight">Coming Soon</h1>
      <div
        onClick={() => {
          router.back();
        }}
        className={cn(styles.backBtn, "animate__animated animate__fadeInLeft")}
      >
        Come Back
      </div>
    </div>
  );
};
