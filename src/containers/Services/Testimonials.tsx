import { useEffect, useState } from "react";
import { Section } from "@src/components/Section";
import styles from "./styles.module.scss";
import Image, { ImageLoader } from "next/image";
import { exLoader } from "@src/common/utils";
import { useAppSelector } from "@src/app/hooks";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);

type Props = {
  imageUrl: string;
  desc: string;
  name: string;
  position: string;
};

const testimonials: Props[] = [
  {
    imageUrl: "/images/testimonial_1.webp",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Jennifer Lutheran",
    position: "CEO at pxdraft",
  },
  {
    imageUrl: "/images/testimonial_2.webp",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Jennifer Lutheran",
    position: "CEO at pxdraft",
  },
  {
    imageUrl: "/images/testimonial_3.webp",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Jennifer Lutheran",
    position: "CEO at pxdraft",
  },
  {
    imageUrl: "/images/testimonial_4.webp",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Jennifer Lutheran",
    position: "CEO at pxdraft",
  },
  {
    imageUrl: "/images/testimonial_5.webp",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    name: "Jennifer Lutheran",
    position: "CEO at pxdraft",
  },
];

const Testimonial: React.FC<Props> = (props) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <div
      className={cn(styles.testimonial, { [styles.lightMode]: isLightMode })}
    >
      <div className={styles.avartar}>
        <Image
          src={props.imageUrl}
          alt={props.name}
          loader={exLoader as ImageLoader}
          layout="responsive"
          width={100}
          height={100}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.desc}>{props.desc}</p>
        <h6 className={styles.name}>{props.name}</h6>
        <p className={styles.position}>{props.position}</p>
      </div>
    </div>
  );
};

const OPTION = {
  slidesPerView: 1,
  allowSlideNext: true,
  slidesOffsetBefore: 0,
  slidesOffsetAfter: 0,
  centeredSlides: false,
  spaceBetween: 25,
  threshold: 2,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
};

export const Testimonials: React.FC = () => {
  const [slideNumber, setSlideNumber] = useState(2);
  const { isLightMode } = useAppSelector((state) => state.common);
  useEffect(() => {
    if (typeof window !== undefined && window.innerWidth < 768) {
      setSlideNumber(1);
    }
  }, []);
  return (
    <Section titleText="testimonials">
      <Swiper
        className={cn("mySwiper", isLightMode ? "lightMode" : undefined)}
        spaceBetween={OPTION.spaceBetween}
        slidesPerView={slideNumber}
        centeredSlides={OPTION.centeredSlides}
        allowSlideNext={OPTION.allowSlideNext}
        slidesOffsetAfter={OPTION.slidesOffsetAfter}
        slidesOffsetBefore={OPTION.slidesOffsetBefore}
        threshold={OPTION.threshold}
        autoplay={OPTION.autoplay}
        pagination
        modules={[Pagination]}
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={`carousel-column-${index}-${Math.random()}`}>
            <Testimonial {...testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  );
};
