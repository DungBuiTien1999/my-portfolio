import styles from "./styles.module.scss";
import Image, { ImageLoader } from "next/image";
import { exLoader, handleClickAnchorLink } from "@src/common/utils";
import Link from "next/link";
import { MenuItem } from "@src/types/common";
import cn from "classnames";
import { useAppSelector } from "@src/app/hooks";

const menu: MenuItem[] = [
  {
    name: "home",
    image: "/images/home.svg",
    link: "#home",
  },
  {
    name: "about me",
    image: "/images/about.svg",
    link: "#about",
  },
  {
    name: "services",
    image: "/images/services.svg",
    link: "#services",
  },
  {
    name: "portfolio",
    image: "/images/portfolio.svg",
    link: "#portfolio",
  },
  {
    name: "blogs",
    image: "/images/blogs.svg",
    link: "#blogs",
  },
  {
    name: "contact me",
    image: "/images/contact.svg",
    link: "#contact",
  },
];

export const Navbar: React.FC = () => {
  const { isShowNav, activeSection } = useAppSelector((state) => state.common);
  const handleClick = (
    e:
      | React.MouseEvent<HTMLAnchorElement>
      | React.TouchEvent<HTMLAnchorElement>,
    linkToCheck: string
  ) => {
    e.preventDefault();
    handleClickAnchorLink(linkToCheck);
  };
  return (
    <nav className={cn(styles.container, { [styles.show]: isShowNav })}>
      <div className={styles.navTop}>
        <div className={styles.logo}>
          <div className={styles.icon}>
            <Image
              src="/images/avatar.png"
              alt="avatar"
              loader={exLoader as ImageLoader}
              layout="responsive"
              width={1}
              height={1}
            />
          </div>
          <p className={styles.name}>tiendung</p>
        </div>
        <ul className={styles.menu}>
          {menu.map((item, idx) => (
            <li
              key={`${item.name}-${idx}`}
              className={cn(styles.item, {
                [styles.active]: activeSection === item.link,
              })}
            >
              <div className={styles.icon}>
                <Image
                  src={item.image}
                  alt="home"
                  loader={exLoader as ImageLoader}
                  layout="responsive"
                  width={1}
                  height={1}
                />
              </div>
              <a
                onClick={(e) => handleClick(e, item.link)}
                className={styles.text}
                href={item.link}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.navBottom}>
        <Link
          href="https://www.facebook.com/profile.php?id=100009396398570"
          target="_blank"
        >
          <i className="fa-brands fa-facebook-f"></i>
        </Link>
        <Link href="https://twitter.com/?lang=en" target="_blank">
          <i className="fa-brands fa-twitter"></i>
        </Link>
        <Link href="https://www.instagram.com/_dung_bui/" target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link
          href="https://www.linkedin.com/in/dung-bui-209a96240/"
          target="_blank"
        >
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link href="https://github.com/DungBuiTien1999" target="_blank">
          <i className="fa-brands fa-github"></i>
        </Link>
      </div>
    </nav>
  );
};
