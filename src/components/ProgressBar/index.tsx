import styles from "./styles.module.scss";
import cn from "classnames";
import { useAppSelector } from "@src/app/hooks";

type Props = {
  title?: string;
  progress: number;
  className?: string;
};

export const ProgressBar: React.FC<Props> = ({
  title,
  progress,
  className,
}) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <div className={cn(styles.container, className)}>
      {title && (
        <h6 className={cn(styles.title, { [styles.lightMode]: isLightMode })}>
          {title}
        </h6>
      )}
      <div
        className={cn(styles.progressWrapper, {
          [styles.lightMode]: isLightMode,
        })}
      >
        <div
          style={{ width: `${progress}%` }}
          className={styles.progress}
        ></div>
      </div>
    </div>
  );
};
