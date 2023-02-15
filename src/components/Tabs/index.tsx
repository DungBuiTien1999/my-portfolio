import { Tab } from "@src/types/common";
import styles from "./styles.module.scss";
import cn from "classnames";
import { useAppDispatch, useAppSelector } from "@src/app/hooks";
import Router from "next/router";
import { setActiveTab } from "@src/features/common/commonSlice";

type Props = {
  tabs: Tab[];
  active: string;
  isFixedTop?: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

export const Tabs: React.FC<Props> = ({
  tabs,
  active,
  isFixedTop,
  children,
}) => {
  const { isLightMode } = useAppSelector((state) => state.common);
  const dispatch = useAppDispatch();
  const handleClick = (tab: Tab) => {
    if (tab.url) {
      Router.push(tab.url);
      return;
    }
    if (tab.filter) {
      dispatch(setActiveTab(tab.filter));
    }
  };
  return (
    <div className={styles.container}>
      <div
        className={cn(styles.tabsHeader, {
          [styles.fixTop]: isFixedTop,
          [styles.lightMode]: isLightMode,
        })}
      >
        {tabs.map((tab, idx) => (
          <div
            key={`${idx}-${tab.name}`}
            className={cn(styles.tabItem, {
              [styles.active]: active === tab.name,
            })}
            onClick={() => handleClick(tab)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
};
