import {useEffect} from 'react';

const Even = () => {
  useEffect(() => {
    // 클린업, 정리함수
    return () => {
       console.log("unmount 됩니다. Even 컴포넌트가 사라집니다.");
    };
  }, []);
  return <div>짝수입니다.</div>;
}
 export default Even;