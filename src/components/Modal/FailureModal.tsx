import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import { setOpenFailure } from "@src/features/notice/noticeSlice";
import { BaseModal } from "./modal";
import Image, { ImageLoader } from "next/image";
import { exLoader } from "@src/common/utils";
import cn from "classnames";

export const FailureModal: React.FC = () => {
  const { openFailure } = useAppSelector((state) => state.notice);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(setOpenFailure(false));
  };
  return (
    <BaseModal
      open={openFailure}
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
            src="/images/ic_failure.png"
            alt="successful."
            loader={exLoader as ImageLoader}
            fill
          />
        </div>
        <div className={styles.content}>
          <h6 className={styles.title}>Opss</h6>
          <p className={styles.message}>Some errors happen, please try again</p>
        </div>
        <button
          className={cn(styles.noticeBtn, styles.Failure)}
          onClick={handleClose}
        >
          Try Again
        </button>
      </div>
    </BaseModal>
  );
};
