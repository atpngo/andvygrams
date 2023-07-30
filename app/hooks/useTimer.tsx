import { useCallback, useEffect, useState } from "react";

const interval = (delay: number = 0) => (callback: () => void) =>
  useEffect(() => {
    const id = setInterval(callback, delay);

    return () => clearInterval(id);
  }, [callback]);

const use1Second = interval(1000);

export const useTimer = (
  callback: () => void,
  initialSeconds: number = 0,
  initiallyRunning: boolean = false,
) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const tick = useCallback(
    () => (running ? setSeconds((seconds) => {
        if (seconds > 0)
        {
            return seconds - 1;
        }
        if (seconds == 0)
        {
            callback();
        }
        return 0;
    }) : undefined),
    [running]
  );
  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => setSeconds(0);
  const stop = () => {
    pause();
    reset();
  };

  use1Second(tick);

  return { pause, reset, running, seconds, start, stop };
};
