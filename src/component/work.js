import React, { useState } from 'react'
import  "./Header.css";

function Header(){
  const [counts,setCounts]=useState(100);
  const [counts1,setCounts1]=useState(10);
  const [counts2,setCounts2]=useState(10);
  function high()
  {
    setCounts(counts+1);
    //setCounts1(counts1-1);
  }
  function low()
  {
    //setCounts(counts+1);
    setCounts1(counts1-1);
  }
  function mid()
  {
    setCounts2(counts2+1);
    //setCounts1(counts1-1);
  }
  return(
    <div>
      <button onClick={high}>increment</button>
      <span>{counts}</span> <br></br><br></br>
      <button onClick={low}>Decrement</button>
      <span>{counts1}</span><br></br><br></br>
      <button onClick={mid}>increment</button>
      <span>{counts2}</span>
    </div>
  )
}

export default Header;