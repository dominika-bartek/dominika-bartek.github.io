export const useMobile = () => {
  const { matches: isMobile } =
    typeof window !== "undefined"
      ? window.matchMedia("(max-width: 768px)")
      : { matches: false };

  return isMobile;
};
