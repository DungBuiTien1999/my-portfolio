import { TypeAnimation } from "react-type-animation";

type Props = {
  prefixText?: string;
  className?: string;
  styleInline?: React.CSSProperties;
  sequences: (
    | string
    | number
    | ((element: HTMLElement | null) => void | Promise<void>)
  )[];
};

export const TypingAnimation: React.FC<Props> = ({
  prefixText,
  className,
  styleInline,
  sequences,
}) => {
  return (
    <p className={className}>
      {prefixText}{" "}
      <TypeAnimation
        sequence={sequences}
        style={styleInline}
        wrapper={"span"}
        repeat={Infinity}
        speed={20}
      />
    </p>
  );
};
