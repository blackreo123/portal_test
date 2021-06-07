import { useState } from 'react';
import AccSelect from './AccSelect';
import './App.css';

function App() {
  let list = ['감자', '고구마', '호박', '가지']
  const [textColor, setTextColor] = useState('black');
  const [placeHolder, setPlaceHolder] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);
  const [fieldWidth, setFieldWidth] = useState();
  const [listIndex, setListIndex] = useState();

  const 디스에이블테스트 = () => {
    if(isDisabled){
      setIsDisabled(false)
    }else{
      setIsDisabled(true)
    }
  }

  const 플레이스홀더테스트 = () => {
    if(placeHolder){
      setPlaceHolder('')
    }else if(placeHolder === ''){
      setPlaceHolder('플레이스홀더')
    }
  }

  const 넓이테스트 = () => {
    setFieldWidth('70rem')
  }

  const 글자색테스트 = () => {
    setTextColor('blue')
  }

  const 인덱스테스트 = () => {
    setListIndex(3)
  }
  return (
    <>
      <AccSelect listIndex={listIndex} listData={list} textColor={textColor} placeHolder={placeHolder} isDisabled={isDisabled} fieldWidth={fieldWidth}></AccSelect>

      <button onClick={디스에이블테스트}>디스에이블테스트</button>
      <button onClick={플레이스홀더테스트}>플레이스홀더테스트</button>
      <button onClick={넓이테스트}>넓이테스트</button>
      <button onClick={글자색테스트}>글자색테스트</button>
      <button onClick={인덱스테스트}>인덱스테스트</button>
    </>
  );
}

export default App;
