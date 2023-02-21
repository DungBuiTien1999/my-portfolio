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
    year: "2020-2021",
    skill: "Basic Blockchain",
    location: "University of Science - VNUHCM",
  },
  {
    year: "2019-2022",
    skill: "Web Development",
    location: "University of Science - VNUHCM",
  },
  {
    year: "2019-2022",
    skill: "Software Engineering",
    location: "University of Science - VNUHCM",
  },
  {
    year: "2017-2019",
    skill: "Basic Coding",
    location: "University of Science - VNUHCM",
  },
];

const skills = [
  {
    title: "HTML/CSS",
    process: 70,
  },
  {
    title: "ReactJS",
    process: 85,
  },
  {
    title: "NextJS",
    process: 50,
  },
  {
    title: "Logic",
    process: 80,
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
            I am a Front-end Developer with over 2 years of experience with
            ReactJS. I have experienced with Git, Typescript, NextJS, Redux
            Toolkip, Redux Saga, SASS, Styles Component, CSS Library like Ant
            Design, Bootstrap, Tailwindcss.
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
