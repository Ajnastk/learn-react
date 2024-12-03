
  import React, { useState, useEffect } from 'react';

export const Stopwatch = ()=> {
  const [seconds, setSeconds] = useState(0);  // State to hold the current time in seconds
  const [isRunning, setIsRunning] = useState(false);  // State to track whether the stopwatch is running
  const [intervalId, setIntervalId] = useState(null);  // State to store the interval ID

  // Function to start the stopwatch
  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      const id = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);  // Increment seconds by 1
      }, 1000);
      setIntervalId(id);  // Save the interval ID to clear it later
    }
  };

  // Function to pause the stopwatch
  const pauseTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);  // Clear the interval when paused
  };

  // Function to reset the stopwatch
  const resetTimer = () => {
    setIsRunning(false);
    clearInterval(intervalId);  // Clear the interval when reset
    setSeconds(0);  // Reset the time to 0
  };

  // Cleanup the interval when the component unmounts
  useEffect(() => {
    return () => {
      clearInterval(intervalId);  // Clear interval on component unmount
    };
  }, [intervalId]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Stopwatch</h1>
      <div style={{ fontSize: '48px', margin: '20px' }}>
        {seconds}s
      </div>
      <button onClick={startTimer} disabled={isRunning} style={{ padding: '10px', margin: '10px' }}>
        Start
      </button>
      <button onClick={pauseTimer} disabled={!isRunning} style={{ padding: '10px', margin: '10px' }}>
        Pause
      </button>
      <button onClick={resetTimer} style={{ padding: '10px', margin: '10px' }}>
        Reset
      </button>
    </div>
  );
}




