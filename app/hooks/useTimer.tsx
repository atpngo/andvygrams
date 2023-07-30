import { useCallback, useEffect, useState } from "react";

const interval = (delay: number = 0) => (callback: () => void) =>
  useEffect(() => {
    const id = setInterval(callback, delay);

    return () => clearInterval(id);
  }, [callback]);

const use1Second = interval(1000);

export const useTimer = (
  callback: (arg: () => void) => void,
  initialSeconds: number = 0,
  initiallyRunning: boolean = false,
) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [running, setRunning] = useState(initiallyRunning);
  const start = () => setRunning(true);
  const pause = () => setRunning(false);
  const reset = () => setSeconds(initialSeconds);
  const stop = () => {
    pause();
    reset();
  };


  const tick = useCallback(
    () => (running ? setSeconds((seconds) => {
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

  return { seconds, start, stop };
};
