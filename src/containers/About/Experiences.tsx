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
    from: "May 5",
    to: "Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    jobType: JOBTYPE.FULLTIME,
  },
  {
    imageUrl: "./images/company_2.png",
    title: "Front-end Developer",
    role: "Developer",
    location: "Office",
    from: "May 5",
    to: "Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
    jobType: JOBTYPE.PARTYIME,
  },
  {
    imageUrl: "./images/company_3.png",
    title: "Front-end Developer",
    role: "Developer",
    location: "Office",
    from: "May 5",
    to: "Present",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.",
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
