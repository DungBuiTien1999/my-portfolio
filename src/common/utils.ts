import { IImageLoader } from "@src/types/utils";

export const exLoader = ({ src, width, quality }: IImageLoader) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export const handleClickAnchorLink = (linkToCheck: string) => {
  const id = linkToCheck.replace("#", "");
  const element = document.getElementById(id);
  if (element) {
    const heightHeader =
      typeof window !== undefined && window.innerWidth < 968 ? 70 : 0;
    console.log(heightHeader);
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - heightHeader;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};
