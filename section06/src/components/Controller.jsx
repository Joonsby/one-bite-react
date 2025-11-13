import {useState} from 'react';


const Controller = ({number,setNumber}) => {
  const changeNumber = () => {
    console.log(number);
  }

  return(
    <>
      <button onClick={changeNumber} value="-1">-1</button>
      <button onClick={changeNumber} value="-10">-10</button>
      <button onClick={changeNumber} value="-100">-100</button>
      <button onClick={changeNumber} value="100">+100</button>
      <button onClick={changeNumber} value="10">+10</button>
      <button onClick={changeNumber} value="1">+1</button>
    </>
  )
}

export default Controller;