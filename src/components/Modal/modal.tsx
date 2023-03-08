import Modal, { Styles } from "react-modal";
import { disableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock";
import { useEffect, useState } from "react";

const customStyles: Styles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.4)",
    display: "flex",
    padding: "20px 0",
  },
  content: {
    width: "87%",
    maxWidth: "375px",
    padding: "24px 16px",
    borderRadius: "16px",
    border: "0px",
    position: "relative",
    zIndex: 102,
    inset: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    boxSizing: "border-box",
    margin: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "spaceBetween",
    opacity: 0,
    transform: "translateY(30px)",
  },
};

type Props = {
  children: JSX.Element[] | JSX.Element | string;
  open: boolean;
  styleModal?: Styles | undefined;
  eventClose(): void;
};

export const BaseModal: React.FC<Props> = (props) => {
  const [activeStyles, setStyles] = useState<Styles>(customStyles);
  const [refModal, setRef] = useState<HTMLDivElement | undefined>(undefined);
  const { children, open, styleModal, eventClose } = props;
  const closeModal = () => {
    eventClose();
  };
  const handleAfter = () => {
    if (refModal) {
      disableBodyScroll(refModal);
    }
  };
  useEffect(() => {
    if (!open) {
      clearAllBodyScrollLocks();
    }
    return () => clearAllBodyScrollLocks();
  }, [open]);
  useEffect(() => {
    let isComponentMounted = true;
    if (isComponentMounted && styleModal) {
      const newStyles = {
        overlay: {
          ...customStyles.overlay,
          ...styleModal?.overlay,
        },
        content: {
          ...customStyles.content,
          ...styleModal?.content,
        },
      };
      setStyles(newStyles);
    }
    return () => {
      isComponentMounted = false;
    };
  }, [styleModal]);
  return (
    <Modal
      isOpen={open}
      onRequestClose={closeModal}
      style={activeStyles}
      ariaHideApp={false}
      onAfterOpen={handleAfter}
      htmlOpenClassName="overflow-hidden"
      shouldCloseOnOverlayClick={false}
      overlayRef={(node) => setRef(node)}
    >
      {children}
    </Modal>
  );
};
