import styles from "./styles.module.scss";
import cn from "classnames";
import { useAppSelector } from "@src/app/hooks";

type Props = {
  text: string;
  handleClick(): void;
};

export const BtnBar: React.FC<Props> = ({ text, handleClick }) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <div
      onClick={handleClick}
      className={cn(styles.btnBar, { [styles.lightMode]: isLightMode })}
    >
      <p>{text}</p>
    </div>
  );
};
