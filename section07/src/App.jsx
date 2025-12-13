/*
  onClickButton에 이벤트를 넣지 않는 이유는 함수 호출은 비동기로 실행되기 때문에
  함수가 완료되지 않은 상태에서 다음 코드가 실행될 수 있기 때문이다.
  그렇기 때문에 useEffect를 사용하여 상태가 변경된 후에 실행되도록 한다.
*/

import './App.css'
import Viewer from './components/Viewer';
import Controller from './components/Controller';
import Even from './components/Even';
import { useState,useEffect,useRef } from 'react';


function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');
  
  const isMount = useRef(false);

  // React 생명주기(Lifecycle)

  // 1. 마운트 : 탄생
  useEffect(()=>{
    console.log('마운트 될 때 실행됩니다.');
  },[]);

  
  // 2. 업데이트 : 변화, 리랜더링
  useEffect(()=>{
    if(!isMount.current){
      isMount.current = true;
      return;
    }
    console.log('업데이트 될 때 실행됩니다.');
  });
  
  // 3. 언마운트 : 죽음
  

  useEffect(()=>{
    // console.log(`count : ${count}`);
  }, [count,input]);
  // 의존성 배열
  // dependency array(deps)  

  const onClickButton = (value) => {
    setCount(count + value);    
  }  

  return (
    <div className = 'App'>
      <h1>Simple Counter</h1>
      <section>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      </section>
      <section>
        <Viewer count={count}/>
        {count % 2 === 0 && <Even />}
      </section>
      <section>
        <Controller onClickButton={onClickButton}/>
      </section>
    </div>
  )
}

export default App
