import { Section } from "@src/components/Section";
import styles from "./styles.module.scss";
import Image, { ImageLoader } from "next/image";
import { exLoader } from "@src/common/utils";
import { IBlog } from "@src/types/common";
import { useAppSelector } from "@src/app/hooks";
import cn from "classnames";
import Link from "next/link";
import { BtnBar } from "@src/components/Button/BtnBar";
import { useRouter } from "next/router";

const blogs: IBlog[] = [
  {
    id: "lWrHAvDEtWhs",
    image: "/images/blogs/blog_1.webp",
    publish: "29/FEB/2022",
    type: "website",
    numberComment: 1,
    title:
      "Five Solid Evidences Attending Design Is Good For Your Career Development.",
  },
  {
    id: "dTITUnjvIOwu",
    image: "/images/blogs/blog_2.webp",
    publish: "29/FEB/2022",
    type: "website",
    numberComment: 1,
    title:
      "Ten Mind-Blowing Reasons Why Design Is Using This Technique For Exposure.",
  },
  {
    id: "gXtxOjkwUFpl",
    image: "/images/blogs/blog_3.webp",
    publish: "29/FEB/2022",
    type: "website",
    numberComment: 1,
    title: "I Will Tell You The Truth About Design In The Next 60 Seconds.",
  },
  {
    id: "wNFFPFDkyUNu",
    image: "/images/blogs/blog_4.webp",
    publish: "29/FEB/2022",
    type: "website",
    numberComment: 1,
    title: "What You Know About Design And What You Don't Know About Design.",
  },
  {
    id: "wzERYkBfCgPw",
    image: "/images/blogs/blog_5.webp",
    publish: "29/FEB/2022",
    type: "website",
    numberComment: 1,
    title:
      "Five Solid Evidences Attending Design Is Good For Your Career Development.",
  },
  {
    id: "tcAKwPIOljfH",
    image: "/images/blogs/blog_6.webp",
    publish: "29/FEB/2022",
    type: "website",
    numberComment: 1,
    title:
      "Five Solid Evidences Attending Design Is Good For Your Career Development.",
  },
];

const Blog: React.FC<IBlog> = ({
  image,
  title,
  publish,
  type,
  numberComment,
  id,
}) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <div className={cn(styles.blog, { [styles.lightMode]: isLightMode })}>
      <div className={styles.blogImg}>
        <Image
          src={image}
          alt={title}
          loader={exLoader as ImageLoader}
          layout="responsive"
          width={3}
          height={2}
        />
      </div>
      <div className={styles.blogInfo}>
        <div
          className={styles.meta}
        >{`${publish} - ${type} - ${numberComment} comment`}</div>
        <h6 className={styles.title}>
          <Link href={`/blogs/${id}`}>{title}</Link>
        </h6>
      </div>
    </div>
  );
};

export const Blogs: React.FC = () => {
  const router = useRouter();
  return (
    <Section
      id="blogs"
      isMainSection
      titleText="latest blog."
      className={styles.pt100}
    >
      <div className={styles.wrapper}>
        {blogs.slice(0, 4).map((blog) => (
          <div key={blog.id} className={styles.item}>
            <Blog {...blog} />
          </div>
        ))}
      </div>
      <div className={styles.btnSeeMore}>
        <BtnBar
          text="More Blogs"
          handleClick={() => {
            router.push("/blogs");
          }}
        />
      </div>
    </Section>
  );
};
