import React,{useState,useEffect} from "react";

const Stopwatch = () =>{

    const [isRunning, setIsRunning] = useState(false);
    const [time, setTime] = useState(0);
  
    useEffect(() => {
      let intervalId;
      if (isRunning) {
        intervalId = setInterval(() => {
          setTime((prevTime) => prevTime + 1);
        }, 1000);
      } else {
        clearInterval(intervalId);
      }
  
      return () => clearInterval(intervalId);
    }, [isRunning]);
  
    const handleStartStop = () => {
      setIsRunning(!isRunning);
    };
  
    const handleReset = () => {
      setIsRunning(false);
      setTime(0);
    };
  
    const formatTime = () => {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };

    return(
        <div>
        <h1>Stopwatch</h1>
        <p>Time:<span>{formatTime()}</span></p>
        <button onClick={handleStartStop}>
            {!isRunning? 'Start':'Stop'}
        </button>
        <button onClick={handleReset}>Reset</button>

        </div>

    )
}
export default Stopwatch;