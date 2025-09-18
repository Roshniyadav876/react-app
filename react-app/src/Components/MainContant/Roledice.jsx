import { useState } from 'react'
import dice1 from "../../assets/dice_1.png";
import dice2 from "../../assets/dice_2.png";
import dice3 from "../../assets/dice_3.png";
import dice4 from "../../assets/dice_4.png";
import dice5 from "../../assets/dice_5.png";
import dice6 from "../../assets/dice_6.png";
import './Roledice.css'

function Roledice({ Rulesfunc, onRoll, onReset }) {
  const [Dice, setDice] = useState(dice1);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];

  // function to roll dice
  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6); // 0 - 5
    setDice(diceImages[randomNumber]); // state update
    onRoll(randomNumber + 1); // parent ko value bhejna (1–6)
  };

  return (
    <div className='roledice'>
      <img src={Dice} alt="dice" onClick={rollDice}/>
      <p>Click on Dice to roll</p>
      <div className="dicebtn">
        <button className='reset' onClick={onReset}>Reset score</button>
        <button className='showrules' onClick={Rulesfunc}>Show Rules</button>
      </div>
    </div>
  )
}

export default Roledice
