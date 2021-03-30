import { useEffect, useRef } from "react";

interface IntervalObject {
  callback: () => void;
  delay: any;
}

export function useInterval(refObject: IntervalObject) {
  const savedCallback = useRef<IntervalObject>();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = refObject;
  }, [refObject]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      if (savedCallback.current) {
        savedCallback.current.callback();
      }
    }, refObject.delay);

    return () => clearInterval(id);
  }, [refObject]);
}
