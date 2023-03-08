import styles from "./styles.module.scss";
import cn from "classnames";
import { FormEvent, useEffect, useState } from "react";
import { useAppSelector } from "@src/app/hooks";
import { validateEmail } from "@src/common/utils";

type Props = {
  type?: string;
  name: string;
  isRequire?: boolean;
  placeholder?: string;
  className?: string;
  isDisable?: boolean;
  checkRequire?: boolean;
  isReset?: boolean;
  handleChange(value: string | number, name?: string): void;
};

export const Input: React.FC<Props> = ({
  type,
  name,
  isRequire,
  checkRequire,
  placeholder,
  className,
  isDisable,
  isReset,
  handleChange,
}) => {
  const [value, setValue] = useState("");
  const [isErr, setIsErr] = useState(false);

  const { isLightMode } = useAppSelector((state) => state.common);

  useEffect(() => {
    if (
      checkRequire &&
      isRequire &&
      (value === "" || (type === "email" && !validateEmail(value)))
    ) {
      setIsErr(true);
    } else {
      setIsErr(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checkRequire, isRequire, value]);

  useEffect(() => {
    if (isReset) setValue("");
  }, [isReset]);

  const handleOnChange = (e: FormEvent<HTMLInputElement>) => {
    const ipValue = e.currentTarget.value;
    const ipName = e.currentTarget.name;
    setValue(ipValue);
    handleChange(ipValue, ipName);
  };
  return (
    <input
      value={value}
      name={name}
      className={cn(styles.input, className, {
        [styles.lightMode]: isLightMode,
        [styles.err]: isErr,
      })}
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleOnChange(e)}
      disabled={isDisable}
      autoComplete="off"
    />
  );
};

export const TextAreaInput: React.FC<Props> = ({
  name,
  isRequire,
  checkRequire,
  placeholder,
  className,
  isDisable,
  isReset,
  handleChange,
}) => {
  const [value, setValue] = useState("");
  const [isErr, setIsErr] = useState(false);

  const { isLightMode } = useAppSelector((state) => state.common);

  useEffect(() => {
    if (checkRequire && isRequire && value === "") {
      setIsErr(true);
    } else {
      setIsErr(false);
    }
  }, [checkRequire, isRequire, value]);

  useEffect(() => {
    if (isReset) setValue("");
  }, [isReset]);

  const handleOnChange = (e: FormEvent<HTMLTextAreaElement>) => {
    const ipValue = e.currentTarget.value;
    const ipName = e.currentTarget.name;
    setValue(ipValue);
    handleChange(ipValue, ipName);
  };
  return (
    <textarea
      value={value}
      name={name}
      className={cn(styles.textarea, className, {
        [styles.lightMode]: isLightMode,
        [styles.err]: isErr,
      })}
      placeholder={placeholder}
      onChange={(e) => handleOnChange(e)}
      disabled={isDisable}
    />
  );
};
