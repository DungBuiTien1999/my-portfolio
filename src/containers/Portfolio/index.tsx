import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { Section } from "@src/components/Section";
import { Tabs } from "@src/components/Tabs";
import { setActiveTab } from "@src/features/common/commonSlice";
import { PortfolioItem, Tab } from "@src/types/common";
import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Image, { ImageLoader } from "next/image";
import { exLoader } from "@src/common/utils";

type TAB = "all" | "branding" | "photoshop" | "fashion" | "product";

const tabs: Tab[] = [
  { name: "all", filter: "all" },
  { name: "branding", filter: "branding" },
  { name: "photoshop", filter: "photoshop" },
  { name: "fashion", filter: "fashion" },
  { name: "product", filter: "product" },
];

const gallery: PortfolioItem[] = [
  {
    url: "/images/portfolio/image_1.webp",
    tags: ["branding", "photoshop", "fashion"],
  },
  {
    url: "/images/portfolio/image_2.webp",
    tags: ["branding", "photoshop", "product"],
  },
  {
    url: "/images/portfolio/image_3.webp",
    tags: ["branding", "photoshop", "fashion", "product"],
  },
  {
    url: "/images/portfolio/image_4.webp",
    tags: ["branding", "fashion", "product"],
  },
  {
    url: "/images/portfolio/image_5.webp",
    tags: ["fashion", "product"],
  },
  {
    url: "/images/portfolio/image_7.webp",
    tags: ["branding", "photoshop", "product"],
  },
  {
    url: "/images/portfolio/image_8.webp",
    tags: ["photoshop", "fashion", "product"],
  },
  {
    url: "/images/portfolio/image_12.webp",
    tags: ["branding", "photoshop"],
  },
  {
    url: "/images/portfolio/image_13.webp",
    tags: ["photoshop", "fashion", "product"],
  },
  {
    url: "/images/portfolio/image_14.webp",
    tags: ["photoshop", "fashion", "product"],
  },
  {
    url: "/images/portfolio/image_15.webp",
    tags: ["branding", "photoshop", "fashion", "product"],
  },
  {
    url: "/images/portfolio/image_17.webp",
    tags: ["fashion", "product"],
  },
];

export const Portfolio: React.FC = () => {
  const [galleryByTag, setGalleryByTag] = useState<PortfolioItem[]>([]);
  const { activeTab } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setActiveTab(tabs[0].name));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if ((activeTab as TAB) === "all") setGalleryByTag(gallery);
    else {
      const list = gallery.filter((item) => item.tags.includes(activeTab));
      setGalleryByTag(list);
    }
  }, [activeTab]);
  return (
    <div className={styles.container}>
      <Section
        id="portfolio"
        isMainSection
        titleText="portfolio."
        className={styles.pt100}
      >
        <Tabs tabs={tabs} active={activeTab}>
          <div className={styles.gridWrapper}>
            {galleryByTag.map((item, idx) => (
              <div key={`${idx}`} className={styles.gridItem}>
                <Image
                  src={item.url}
                  alt="portpolio"
                  loader={exLoader as ImageLoader}
                  layout="responsive"
                  width={100}
                  height={100}
                />
              </div>
            ))}
          </div>
        </Tabs>
      </Section>
    </div>
  );
};
