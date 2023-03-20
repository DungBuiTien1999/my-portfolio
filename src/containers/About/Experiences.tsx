import { Section } from "@src/components/Section";
import styles from "./styles.module.scss";
import Image, { ImageLoader } from "next/image";
import { exLoader } from "@src/common/utils";
import cn from "classnames";
import { useAppSelector } from "@src/app/hooks";

enum JOBTYPE {
  FULLTIME,
  PARTYIME,
}

type Props = {
  imageUrl: string;
  title: string;
  role: string;
  location: string;
  from: string;
  to: string;
  desc: string;
  jobType: JOBTYPE;
};

const experiences: Props[] = [
  {
    imageUrl: "./images/company_1.png",
    title: "Front-end Developer",
    role: "Developer",
    location: "Office",
    from: "May 2021",
    to: "Present",
    desc: "I am responsible for handling UI and giving solutions for Web applications. I have significantly improved advanced skills about FE. I am familiar with Agile Scrum Methodology.",
    jobType: JOBTYPE.FULLTIME,
  },
];

const Experience: React.FC<Props> = (props) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <div className={cn(styles.wrapper, { [styles.lightMode]: isLightMode })}>
      <div className={styles.logo}>
        <Image
          src={props.imageUrl}
          alt={props.title}
          loader={exLoader as ImageLoader}
          layout="responsive"
          width={1}
          height={1}
        />
      </div>
      <div className={styles.content}>
        <h6 className={styles.title}>{props.title}</h6>
        <label
          className={cn(styles.group, { [styles.lightMode]: isLightMode })}
        >
          {props.role} | {props.location} | {`${props.from} - ${props.to}`}
        </label>
        <div className={styles.jobType}>
          {props.jobType ? "PART TIME" : "FULL TIME"}
        </div>
        <p className={cn(styles.desc, { [styles.lightMode]: isLightMode })}>
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export const Experiences: React.FC = () => {
  return (
    <Section titleText="experience">
      <div className={styles.experiences}>
        {experiences.map((experience, idx) => (
          <Experience key={idx} {...experience} />
        ))}
      </div>
    </Section>
  );
};
