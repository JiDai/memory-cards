import React, {useEffect, useRef, useState} from "react";
import {differenceInSeconds} from "date-fns";


function useInterval(callback: any, delay: number) {
    const savedCallback = useRef();

    // Remember the latest function.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            // @ts-ignore
            savedCallback.current();
        }

        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export type TimerProps = {
    startedAt: Date
}

function formatTime(seconds: number): string {
    if(seconds<60) {
        return `${seconds}s`
    }
    else {
        return `${Math.floor(seconds/60)}m ${seconds%60}s`
    }
}

const Timer: React.FC<TimerProps> = ({startedAt}) => {
    const [count, setCount] = useState(0);

    useInterval(() => {
        setCount(differenceInSeconds(new Date(), startedAt));
    }, 1000);

    return <div>Time: {formatTime(count)}</div>;
};

export default Timer;
