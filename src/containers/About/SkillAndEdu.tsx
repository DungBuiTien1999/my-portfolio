import { Section } from "@src/components/Section";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useAppSelector } from "@src/app/hooks";
import { ProgressBar } from "@src/components/ProgressBar";

type EduProps = {
  isLightMode: boolean;
  year: string;
  skill: string;
  location: string;
};

const educations = [
  {
    year: "2010-2012",
    skill: "Graphic Designer",
    location: "International Design Institute",
  },
  {
    year: "2010-2012",
    skill: "Web Development",
    location: "International Design Institute",
  },
  {
    year: "2010-2012",
    skill: "Search Engine Optimization",
    location: "International Design Institute",
  },
];

const skills = [
  {
    title: "HTML5",
    process: 92,
  },
  {
    title: "WordPress",
    process: 72,
  },
  {
    title: "Magento",
    process: 86,
  },
  {
    title: "UI/UX",
    process: 88,
  },
];

const Education: React.FC<EduProps> = ({
  isLightMode,
  year,
  skill,
  location,
}) => {
  return (
    <div className={cn(styles.eduItem, { [styles.lightMode]: isLightMode })}>
      <span className={styles.year}>{year}</span>
      <h6>{skill}</h6>
      <p>{location}</p>
    </div>
  );
};

export const SkillAndEdu: React.FC = () => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <Section titleText="education & skill" hasBorder>
      <div
        className={cn(styles.aboutWrapper, styles.notBorder, {
          [styles.lightMode]: isLightMode,
        })}
      >
        <div className={styles.education}>
          {educations.map((edu, idx) => (
            <Education
              key={idx}
              isLightMode={isLightMode}
              year={edu.year}
              skill={edu.skill}
              location={edu.location}
            />
          ))}
        </div>
        <div className={styles.skills}>
          <h3>My skills</h3>
          <p>
            I am a Freelancer Front-end Developer with over 3 years of
            experience. I code and create web elements for amazing people around
            the world. I like work with new people. New people new Experiences.
          </p>
          <div>
            {skills.map((skill, idx) => (
              <ProgressBar
                key={idx}
                title={skill.title}
                progress={skill.process}
                className={styles.mt25}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};
