import styles from "./styles.module.scss";
import Image, { ImageLoader } from "next/image";
import { exLoader } from "@src/common/utils";
import { useAppSelector } from "@src/app/hooks";
import cn from "classnames";
import { TypingAnimation } from "@src/components/TypingAnimation";

export const HomeSection: React.FC = () => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <div className={isLightMode ? styles.decorLight : styles.decor}>
      <section
        className={cn(styles.container, { [styles.lightMode]: isLightMode })}
      >
        <div className={styles.textBox}>
          <h6>Hello, I am</h6>
          <h1>Tien Dung</h1>
          <TypingAnimation
            sequences={[
              "A Frontend Developer",
              1000,
              "Passionate Web Development",
              1000,
              "Passionate Reactjs",
              1000,
            ]}
            prefixText="I Am "
            className={styles.lead}
          />
          <p className={cn(styles.desc, { [styles.lightMode]: isLightMode })}>
            I design and develop services for customers of all sizes,
            specializing in creating stylish, modern websites, web services and
            online stores.
          </p>
          <div
            className={cn(styles.btnBar, { [styles.lightMode]: isLightMode })}
          >
            <a href="#">Download CV</a>
          </div>
        </div>
        <div className={styles.hero}>
          <Image
            src="/images/hero.jpg"
            alt="hero"
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
