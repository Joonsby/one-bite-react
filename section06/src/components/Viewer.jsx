import {useState} from 'react';

const Viewer = ({number}) => {  

  return(
    <>
      <div>
        <h1>현재 카운트 : </h1>
      </div>
      <div>
        <p>{number}</p>
      </div>
    </>
  )
}
export default Viewer;