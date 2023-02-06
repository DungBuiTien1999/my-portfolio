import styles from "./styles.module.scss";
import cn from "classnames";
import { useAppSelector } from "@src/app/hooks";

type Props = {
  titleText?: string;
  hasBorder?: boolean;
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
};

export const Section: React.FC<Props> = ({
  className,
  titleText,
  hasBorder,
  children,
}) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <section
      className={cn(styles.container, className, {
        [styles.hasBorder]: hasBorder,
      })}
    >
      {titleText && (
        <h3 className={cn(styles.title, { [styles.lightMode]: isLightMode })}>
          {titleText}
        </h3>
      )}
      {children}
    </section>
  );
};
