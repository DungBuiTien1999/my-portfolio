import styles from "./styles.module.scss";
import Image, { ImageLoader } from "next/image";
import { downloadFile, exLoader } from "@src/common/utils";
import {
  useAppDispatch,
  useAppSelector,
  useIntersectionObserver,
} from "@src/app/hooks";
import cn from "classnames";
import { TypingAnimation } from "@src/components/TypingAnimation";
import { BtnBar } from "@src/components/Button/BtnBar";
import { useEffect, useRef } from "react";
import { setActiveSection } from "@src/features/common/commonSlice";

export const HomeSection: React.FC = () => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const { isLightMode } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  useEffect(() => {
    if (isVisible) dispatch(setActiveSection("#home"));
  });
  return (
    <div className={isLightMode ? styles.decorLight : styles.decor}>
      <section
        className={cn(styles.container, { [styles.lightMode]: isLightMode })}
      >
        <div className={styles.textBox}>
          <h6 ref={ref} id="home">
            Hello, I am
          </h6>
          <h1>Tien Dung</h1>
          <TypingAnimation
            sequences={[
              "A Frontend Developer",
              1000,
              "Passionate Web Development",
              1000,
              "Passionate ReactJS",
              1000,
            ]}
            prefixText="I Am "
            className={styles.lead}
          />
          <p className={cn(styles.desc, { [styles.lightMode]: isLightMode })}>
            I analyze and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            financial company.
          </p>
          <BtnBar
            text="Download CV"
            handleClick={() => {
              downloadFile("/buitiendung_cv.pdf");
            }}
          />
        </div>
        <div className={styles.hero}>
          <Image
            src="/images/hero.webp"
            alt="hero."
            loader={exLoader as ImageLoader}
            layout="responsive"
            width={540}
            height={540}
          />
        </div>
      </section>
    </div>
  );
};
