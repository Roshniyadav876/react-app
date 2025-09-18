import React from 'react'
import './Score.css'

function Score({ score }) {
  return (
    <div className='score'>
      <h1>{score}</h1>
      <p>Total score</p>
    </div>
  )
}

export default Score
