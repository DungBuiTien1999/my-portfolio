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
    const y =
      element.getBoundingClientRect().top + window.pageYOffset - heightHeader;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export const checkValidForm = (
  formData: { [key: string]: string | number },
  requiredField: { [key: string]: boolean }
) => {
  for (const property in requiredField) {
    if (
      !(property in formData) ||
      (requiredField[property] &&
        (formData[property] === "" ||
          (property === "email" && !validateEmail(String(formData[property])))))
    )
      return false;
  }
  return true;
};

export const validateEmail = (email: string) => {
  return email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
