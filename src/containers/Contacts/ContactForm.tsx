import { contactForm } from "@src/common/constant";
import { checkValidForm } from "@src/common/utils";
import { BtnBar } from "@src/components/Button/BtnBar";
import { Input, TextAreaInput } from "@src/components/Input";
import { useReducer, useState } from "react";
import styles from "./styles.module.scss";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const formReducer = (state: any, event: any) => {
  return {
    ...state,
    [event.name]: event.value,
  };
};

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [checkValid, setCheckValid] = useState(false);
  const [isSubmiting, setSubmitting] = useState(false);

  const handleChange = (value: string | number, name: string) => {
    setFormData({
      name,
      value,
    });
  };

  const handleSubmit = () => {
    setCheckValid(true);
    setTimeout(() => {
      setCheckValid(false);
    }, 4000);
    if (checkValidForm(formData, contactForm)) {
      setSubmitting(true);
      setTimeout(() => {
        alert("Submit successfully!");
        setSubmitting(false);
      }, 3000);
    }
  };
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <Input
          name="name"
          placeholder="Name *"
          handleChange={handleChange}
          type="text"
          isRequire
          checkRequire={checkValid}
          isDisable={isSubmiting}
        />
        <Input
          name="email"
          placeholder="Email *"
          handleChange={handleChange}
          type="email"
          isRequire
          checkRequire={checkValid}
          isDisable={isSubmiting}
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
        />
      </div>
      <BtnBar text="send message" handleClick={handleSubmit} />
    </form>
  );
};
