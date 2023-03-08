import { contactForm } from "@src/common/constant";
import { checkValidForm } from "@src/common/utils";
import { BtnBar } from "@src/components/Button/BtnBar";
import { Input, TextAreaInput } from "@src/components/Input";
import { useReducer, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./styles.module.scss";
import { useAppDispatch } from "@src/app/hooks";
import {
  setOpenFailure,
  setOpenSuccess,
} from "@src/features/notice/noticeSlice";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formReducer = (state: any, event: any) => {
  if (event.type === "reset") return {};
  return {
    ...state,
    [event.name]: event.value,
  };
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [checkValid, setCheckValid] = useState(false);
  const [isSubmiting, setSubmitting] = useState(false);
  const [isReset, setIsReset] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const dispatch = useAppDispatch();

  const handleChange = (value: string | number, name: string) => {
    setFormData({
      name,
      value,
    });
  };

  const handleReset = () => {
    setIsReset(true);
    setFormData({ type: "reset" });
    setTimeout(() => {
      setIsReset(false);
    }, 1500);
  };

  const handleSubmit = () => {
    setCheckValid(true);
    setTimeout(() => {
      setCheckValid(false);
    }, 4000);
    if (checkValidForm(formData, contactForm) && form) {
      setSubmitting(true);
      emailjs
        .sendForm(
          process.env.emailServiceId || "",
          process.env.emailTemplateId || "",
          form.current as HTMLFormElement,
          process.env.emailPublicKey || ""
        )
        .then(
          (result) => {
            console.log("result", result.text);
            setSubmitting(false);
            form.current?.reset();
            handleReset();
            dispatch(setOpenSuccess(true));
          },
          (error) => {
            console.log("error", error.text);
            setSubmitting(false);
            form.current?.reset();
            handleReset();
            setOpenFailure(true);
          }
        );
    }
  };
  return (
    <form ref={form} className={styles.form}>
      <div className={styles.row}>
        <Input
          name="name"
          placeholder="Name *"
          handleChange={handleChange}
          type="text"
          isRequire
          checkRequire={checkValid}
          isDisable={isSubmiting}
          isReset={isReset}
        />
        <Input
          name="email"
          placeholder="Email *"
          handleChange={handleChange}
          type="email"
          isRequire
          checkRequire={checkValid}
          isDisable={isSubmiting}
          isReset={isReset}
        />
      </div>
      <div className={styles.row}>
        <Input
          name="subject"
          placeholder="Subject *"
          handleChange={handleChange}
          type="text"
          isRequire
          checkRequire={checkValid}
          isDisable={isSubmiting}
          isReset={isReset}
        />
      </div>
      <div className={styles.row}>
        <TextAreaInput
          name="message"
          placeholder="Your message *"
          handleChange={handleChange}
          isRequire
          checkRequire={checkValid}
          isDisable={isSubmiting}
          isReset={isReset}
        />
      </div>
      <BtnBar text="send message" handleClick={handleSubmit} />
    </form>
  );
};
