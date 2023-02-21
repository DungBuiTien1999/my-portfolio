/* eslint-disable react/no-unescaped-entities */
import { useAppSelector } from "@src/app/hooks";
import { BtnBar } from "@src/components/Button/BtnBar";
import { Section } from "@src/components/Section";
import styles from "./styles.module.scss";
import cn from "classnames";
import Image, { ImageLoader } from "next/image";
import { exLoader, handleClickAnchorLink } from "@src/common/utils";

export const AboutMe: React.FC = () => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <div
      className={cn(styles.aboutWrapper, { [styles.lightMode]: isLightMode })}
    >
      <div className={cn(styles.gallery, { [styles.lightMode]: isLightMode })}>
        <Image
          src="/images/gallery_1.png"
          alt="hero"
          loader={exLoader as ImageLoader}
          layout="responsive"
          width={3072}
          height={3033}
        />
      </div>
      <Section titleText="about me." className={styles.aboutMe}>
        <div className={styles.aboutText}>
          <h3>I'm a Front-end Developer with over 2 years of experience.</h3>
          <p className={cn(styles.desc, { [styles.lightMode]: isLightMode })}>
            I'm a Front-end Developer with over 2 years of experience with
            ReactJS. I'm from Ho Chi Minh City. I code and create web elements
            for amazing people around the world. I am passionate to explore new
            Technology. I like work with new people. New people new Experiences.
          </p>
          <div className={styles.amountExs}>
            <div className={styles.Exps}>
              <p className={styles.amount}>10</p>
              <p
                className={cn(styles.media, {
                  [styles.lightMode]: isLightMode,
                })}
              >
                Projects
                <br />
                Completed.
              </p>
            </div>
            <div className={styles.Exps}>
              <p className={styles.amount}>3k</p>
              <p
                className={cn(styles.media, {
                  [styles.lightMode]: isLightMode,
                })}
              >
                Satisfied
                <br />
                Clients.
              </p>
            </div>
          </div>
          <div className={styles.interact}>
            <BtnBar
              text="Contact me"
              handleClick={() => handleClickAnchorLink("#contact")}
            />
            <BtnBar
              text="Portfolio"
              handleClick={() => handleClickAnchorLink("#portfolio")}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};
