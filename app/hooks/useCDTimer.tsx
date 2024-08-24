import { useCallback, useEffect, useState } from "react";

const interval = (delay: number = 0) => (callback: () => void) =>
  useEffect(() => {
    const id = setInterval(callback, delay);

    return () => clearInterval(id);
  }, [callback]);

const use1Second = interval(1000);

export const useCDTimer = (
  callback: (arg: () => void) => void,
  initialSeconds: number = 0,
  initiallyRunning: boolean = false,
) => {
  const [countdownSeconds, setCountdownSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const startCountdown = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => setCountdownSeconds(initialSeconds);
  const stopCountdown = () => {
    pause();
    reset();
  };


  const tick = useCallback(
    () => (running ? setCountdownSeconds((seconds) => {
        if (seconds > 0)
        {
            return seconds - 1;
        }
        if (seconds == 0)
        {
            callback(stop);
        }
        return 0;
    }) : undefined),
    [running]
  );
  

  use1Second(tick);

  return { countdownSeconds, startCountdown, stopCountdown };
};
