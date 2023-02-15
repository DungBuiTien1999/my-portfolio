import { Features } from "./Features";
import styles from "./styles.module.scss";
import { Testimonials } from "./Testimonials";

export const Services: React.FC = () => {
  return (
    <div className={styles.container}>
      <Features />
      <Testimonials />
    </div>
  );
};
