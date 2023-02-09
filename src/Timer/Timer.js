import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    console.log('ComponentDidMount called')
    const timerInstance = setInterval(() => {
      setTime(new Date());
    }, 2000);

    return () => {
      console.log('Cleanup called')
      clearInterval(timerInstance)
    }
  }, []);

  return <div>{time.toTimeString().split(' ')[0]}</div>;
};

export default Timer;
