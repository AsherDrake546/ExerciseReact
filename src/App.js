import { useState } from 'react';
import RepetitionExercise from './components/RepetitionExercise';
import DurationExercise from './components/DurationExercise';

const EXERCISES = [
  { name: 'Push-ups', type: 'repetition' },
  { name: 'Running', type: 'duration' },
];

function App() {
  const [current, setCurrent] = useState(null);

  let screen;
  if (current) {
    screen = current.type === 'repetition'
      ? <RepetitionExercise name={current.name} />
      : <DurationExercise name={current.name} />;
  } else {
    screen = (
      <div>
        <h1>Exercise Tracker</h1>
        {EXERCISES.map((ex) => (
          <button key={ex.name} onClick={() => setCurrent(ex)}>
            {ex.name}
          </button>
        ))}
      </div>
    );
  }

  return <div className="App">{screen}</div>;
}

export default App;
