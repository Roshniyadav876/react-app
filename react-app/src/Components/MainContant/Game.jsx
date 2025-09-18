import './Game.css';
import Score from './Score';
import Button from './Button';
import Roledice from './Roledice';
import Rules from './Rules';
import { useState } from 'react';

function Game() {
  const [score, setScore] = useState(0);
  const [showrules, setShowrules] = useState(false);
  const [targetNumber, setTargetNumber] = useState(); // ✅ define target

  const handleRoll = (diceValue) => {

  if (diceValue >= targetNumber) {
    setScore(prev => prev + 1); // score increase
  } else {
    setScore(prev => prev - 1); // score decrease
  }
};


  const resetScore = () => setScore(0);

  return (
    <>
      <main className='MainConatant'>
        <Score score={score}/>
        <Button/>
      </main>
      <div className="roledice">
        <Roledice 
          Rulesfunc={() => setShowrules(true)} 
          onRoll={handleRoll} 
          onReset={resetScore} 
        />
      </div>
      {showrules && <Rules />}
    </>
  );
}

export default Game;
