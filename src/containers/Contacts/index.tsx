import { useAppSelector } from "@src/app/hooks";
import { Section } from "@src/components/Section";
import { ContactForm } from "./ContactForm";
import styles from "./styles.module.scss";
import cn from "classnames";

export const Contacts: React.FC = () => {
  const { isLightMode } = useAppSelector((state) => state.common);
  return (
    <Section
      id="contact"
      isMainSection
      titleText="get in touch."
      className={styles.py100}
    >
      <div className={styles.container}>
        <div className={styles.section1}>
          <div
            className={cn(styles.contactInfo, {
              [styles.lightMode]: isLightMode,
            })}
          >
            <h4 className={styles.title}>What’s your story? Get in touch</h4>
            <p className={styles.desc}>
              Always available for freelancing if the right project comes along,
              Feel free to contact me.
            </p>
            <ul className={styles.infoDetails}>
              <li className={styles.media}>
                <i className="fa-regular fa-map"></i>
                <p className={styles.mediaBody}>
                  197 Tran Ba Giao, 15 Ward, Go Vap District, Ho Chi Minh City.
                </p>
              </li>
              <li className={styles.media}>
                <i className="fa-regular fa-envelope"></i>
                <p className={styles.mediaBody}>buitiendung199@gmail.com</p>
              </li>
              <li className={styles.media}>
                <i className="fa-solid fa-mobile-screen-button"></i>
                <p className={styles.mediaBody}>+84 329 816 610</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.section2}>
          <div
            className={cn(styles.contactForm, {
              [styles.lightMode]: isLightMode,
            })}
          >
            <h4 className={styles.title}>Say Something</h4>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className={styles.googleMap}>
        <div className={styles.embedResponsive}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.685436117716!2d106.68679361478665!3d10.835367292281553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752858306d295d%3A0xab6d915389cd7a3!2zMTk3IMSQLiBUcuG6p24gQsOhIEdpYW8sIFBoxrDhu51uZyA1LCBHw7IgVuG6pXAsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1676882767800!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </Section>
  );
};
