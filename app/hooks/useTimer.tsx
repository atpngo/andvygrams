import { useEffect, useState } from "react";

export const useTimer = (initialTime: number, callback: () => void, interval=1000) => 
{
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const customInterval = setInterval(() => {
            if (time > 0)
                setTime((prev) => prev-interval)
        }, interval)

        if (time === 0) callback()

        return () => clearInterval(customInterval)
    }, [time])

    return time;
}