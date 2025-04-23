import { useEffect } from "react";

export const GetWidth = (widthState) => {
  const handleResize = () => {
    widthState(window.innerWidth);
    console.log(window.innerWidth);
  };
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}

export const GetHeight = (setDevHeight) => {
  const handleResize = () => {
    setDevHeight(window.innerHeight);
  };
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}

export const GetScrollY = (setScrollY) => {
  const handleScroll = () => setScrollY(window.scrollY);
  window.addEventListener('scroll', handleScroll);
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}