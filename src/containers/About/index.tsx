import styles from "./styles.module.scss";
import { AboutMe } from "./AboutMe";
import { SkillAndEdu } from "./SkillAndEdu";
import { Experiences } from "./Experiences";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className={styles.container}>
      <AboutMe />
      <SkillAndEdu />
      <Experiences />
    </section>
  );
};
