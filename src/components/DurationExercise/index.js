import { useState, useEffect } from 'react';

function DurationExercise({ name }) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const pad = (n) => String(n).padStart(2, '0');
  const display = `${pad(Math.floor(seconds / 60))}:${pad(seconds % 60)}`;

  return (
    <div>
      <h2>{name}</h2>
      <p>{display}</p>
      <button onClick={() => setRunning(!running)}>{running ? 'Stop' : 'Start'}</button>
      <button onClick={() => { setRunning(false); setSeconds(0); }}>Reset</button>
    </div>
  );
}

export default DurationExercise;
