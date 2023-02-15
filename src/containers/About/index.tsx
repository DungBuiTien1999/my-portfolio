import styles from "./styles.module.scss";
import { AboutMe } from "./AboutMe";
import { SkillAndEdu } from "./SkillAndEdu";
import { Experiences } from "./Experiences";
import { useEffect, useRef } from "react";
import { useAppDispatch, useIntersectionObserver } from "@src/app/hooks";
import { setActiveSection } from "@src/features/common/commonSlice";

export const AboutSection: React.FC = () => {
  const ref = useRef<HTMLElement | null>(null);
  const dispatch = useAppDispatch();
  const entry = useIntersectionObserver(ref, {});
  const isVisible = !!entry?.isIntersecting;
  useEffect(() => {
    if (isVisible) dispatch(setActiveSection("#about"));
  });
  return (
    <section ref={ref} id="about" className={styles.container}>
      <AboutMe />
      <SkillAndEdu />
      <Experiences />
    </section>
  );
};
