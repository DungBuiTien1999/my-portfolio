import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { setOpenSuccess } from "@src/features/notice/noticeSlice";
import { BaseModal } from "./modal";
import Image, { ImageLoader } from "next/image";
import { exLoader } from "@src/common/utils";
import cn from "classnames";

export const SuccessfulModal: React.FC = () => {
  const { openSuccessMsg } = useAppSelector((state) => state.notice);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setOpenSuccess(false));
  };
  return (
    <BaseModal
      open={openSuccessMsg}
      eventClose={handleClose}
      styleModal={{
        content: {
          overflow: "visible",
        },
      }}
    >
      <div className={styles.notice}>
        <div className={styles.icon}>
          <Image
            src="/images/ic_successful.png"
            alt="successful."
            loader={exLoader as ImageLoader}
            fill
          />
        </div>
        <div className={styles.content}>
          <h6 className={styles.title}>Thank You</h6>
          <p className={styles.message}>
            Dung Bui received your message, he will response as soon as posible.
          </p>
        </div>
        <button
          className={cn(styles.noticeBtn, styles.Success)}
          onClick={handleClose}
        >
          OK
        </button>
      </div>
    </BaseModal>
  );
};
