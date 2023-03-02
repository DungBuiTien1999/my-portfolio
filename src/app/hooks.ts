import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

import { RefObject, useEffect, useState } from "react";
import { useRouter } from "next/router";

interface Args extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

export const useIntersectionObserver = (
  elementRef: RefObject<Element>,
  {
    threshold = 0,
    root = null,
    rootMargin = "0%",
    freezeOnceVisible = false,
  }: Args
): IntersectionObserverEntry | undefined => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const frozen = entry?.isIntersecting && freezeOnceVisible;

  const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
    setEntry(entry);
  };

  useEffect(() => {
    const node = elementRef?.current; // DOM Ref
    const hasIOSupport = !!window.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerParams = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerParams);

    observer.observe(node);

    return () => observer.disconnect();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    elementRef?.current,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    JSON.stringify(threshold),
    root,
    rootMargin,
    frozen,
  ]);

  return entry;
};

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  handler: () => void,
  exceptedEle?: string
) => {
  useEffect(() => {
    let isMoveScreen = false;
    const listener = (event: MouseEvent | TouchEvent) => {
      const getTag = event.target as HTMLElement;
      if (
        !ref ||
        !ref.current ||
        ref.current.contains(event.target as Node) ||
        getTag.id === exceptedEle ||
        isMoveScreen
      ) {
        return;
      }
      handler();
    };
    document.addEventListener("touchmove", () => (isMoveScreen = true));
    document.addEventListener("touchstart", () => (isMoveScreen = false));
    document.addEventListener("mousedown", (e) => listener(e));
    document.addEventListener("touchend", (e) => listener(e));
    return () => {
      document.removeEventListener("mousedown", (e) => listener(e));
      document.removeEventListener("touchend", (e) => listener(e));
      document.addEventListener("touchmove", () => (isMoveScreen = false));
      document.addEventListener("touchstart", () => (isMoveScreen = false));
    };
  }, [ref, handler, exceptedEle]);
};

interface IBACKBTN {
  isShow: boolean;
  handleBack(): void;
}

export const useShowBackBtn = (): IBACKBTN => {
  const router = useRouter();
  let isShow = false;
  const handleBack = () => {
    router.back();
  };
  if (router.pathname !== "/") {
    isShow = true;
    return { isShow, handleBack };
  }
  return { isShow, handleBack };
};
