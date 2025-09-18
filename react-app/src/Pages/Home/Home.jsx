import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Game from '../../Components/MainContant/Game'
function Home() {
  const [startgame, setstartgame] = useState(false)
  const playgame=()=>{
    setstartgame(true)
  }
  return (
  <>
  {startgame==false?<Navbar playgame={playgame}/>:<Game/>}
  </>
  )
}

export default Home
