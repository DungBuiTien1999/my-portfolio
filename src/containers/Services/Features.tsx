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
    icon: "fa-solid fa-tv",
    title: "Web Development",
    desc: "I develop website application for mobile and PC with excellent UI, UX and performance.",
  },
  {
    icon: "fa-solid fa-tv",
    title: "Responsive Development",
    desc: "I handle responsive for website application for almost device like mobile (iOS and Android), tablet and computer.",
  },
  {
    icon: "fa-solid fa-bullseye",
    title: "SEO Website",
    desc: "I make website application with excellent SEO. It has all the demand of google engine like title, meta tag, image link and sitemap.xml.",
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
