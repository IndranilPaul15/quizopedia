import { useCallback } from "react";

const useSound = (src) => {
  const play = useCallback(() => {
    const audio = new Audio(src);
    audio.play();
  }, [src]);

  return play;
};

export default useSound;
