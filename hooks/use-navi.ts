import { useEffect, useState } from 'react';

const useNavi = ():[boolean, boolean, () => void] => {
  const [isUp, setIsUp] = useState<boolean>(true);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrollTop, setScrollTop] = useState<number>(0);
  
  const toggleMenu = (): void => setIsOpen(!isOpen);

  const handleScroll = (): void => {
    if (isOpen) {
      return;
    }
    const position = Math.max(window.pageYOffset, document.documentElement.scrollTop);
    const upState: boolean = (position < scrollTop) ? true : false;
    setIsUp(upState);
    setScrollTop(position);
  };

  const handleResize = (): void => {
    if (window.innerWidth > 767 && isOpen) {
      toggleMenu();
    }
  };
  
  useEffect(
    () => {
      // HeaderがDOMとして書き出された時にスクロールイベントに追加される。
      window.addEventListener("scroll", handleScroll, {passive: true});
      window.addEventListener("resize", handleResize, {passive: true});
      // Headerが書き換えられる時、スクロールイベントをリセットする。
      return (): void => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      }
    },
  );

  return [isUp, isOpen, toggleMenu];
};

export default useNavi;