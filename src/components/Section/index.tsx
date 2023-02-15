import styles from "./styles.module.scss";
import cn from "classnames";
import {
  useAppDispatch,
  useAppSelector,
  useIntersectionObserver,
} from "@src/app/hooks";
import { useEffect, useRef } from "react";
import { setActiveSection } from "@src/features/common/commonSlice";

type Props = {
  titleText?: string;
  hasBorder?: boolean;
  className?: string;
  children?: JSX.Element[] | JSX.Element | string;
  id?: string;
  isMainSection?: boolean;
};

export const Section: React.FC<Props> = ({
  className,
  titleText,
  hasBorder,
  children,
  id,
  isMainSection,
}) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const { isLightMode } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  useEffect(() => {
    if (isMainSection && id && isVisible) dispatch(setActiveSection(`#${id}`));
  }, [dispatch, id, isMainSection, isVisible]);
  return (
    <section
      className={cn(styles.container, className, {
        [styles.hasBorder]: hasBorder,
      })}
    >
      {titleText && (
        <h3
          id={id}
          ref={ref}
          className={cn(styles.title, { [styles.lightMode]: isLightMode })}
        >
          {titleText}
        </h3>
      )}
      {children}
    </section>
  );
};
