import { IImageLoader } from "@src/types/utils";

export const exLoader = ({ src, width, quality }: IImageLoader) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};
