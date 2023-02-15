import { Section } from "@src/components/Section";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useAppSelector } from "@src/app/hooks";

type Props = {
  icon: string;
  title: string;
  desc: string;
};

const features: Props[] = [
  {
    icon: "fa-solid fa-mobile",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "fa-solid fa-tv",
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "SEO Marketing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "fa-solid fa-tv",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "fa-solid fa-mobile-screen-button",
    title: "Apllication",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "Web Design",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Feature: React.FC<Props> = ({ icon, title, desc }) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <article
      className={cn(styles.feature, { [styles.lightMode]: isLightMode })}
    >
      <i className={cn(icon, styles.icon)}></i>
      <div className={styles.content}>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.desc}>{desc}</p>
      </div>
    </article>
  );
};

export const Features: React.FC = () => {
  return (
    <Section
      id="services"
      isMainSection
      hasBorder
      titleText="what i do?"
      className={styles.pt100}
    >
      <div className={styles.wrapper}>
        {features.map((feature, idx) => (
          <div key={idx} className={styles.item}>
            <Feature {...feature} />
          </div>
        ))}
      </div>
    </Section>
  );
};
