import React, {useState,useRef} from 'react';
import "./style.css";

const Keypad = () => {
  const [keypad, setKeypad] = useState('');
  const [clickCount, setClickCount] = useState(0);
  const timerId = useRef();
  const letters = { // mapping
    "1": "1",
    "2": "2ABC",
    "3": "3DEF",
    "4": "4GHI",
    "5": "5JKL",
    "6": "6MNO",
    "7": "7PQRS",
    "8": "8TUV",
    "9": "9WXYZ",
    "10": "*",
    "11": "0",
    "12": "#",
  };
  function onClickH(e){
    const id = e.target.id;
    if (!id || !letters[id]) return;
    setKeypad(prev => {
        if (clickCount > 0 && letters[id].length > 1) {
          prev = prev.slice(0, -1);
        }
        return prev+letters[id][Math.min(clickCount, letters[id].length - 1)];
    });
    setClickCount(prev=>prev+1)
    clearTimeout(timerId.current);
    timerId.current = setTimeout(()=>{
      setClickCount(0)
    },300)
  }
  
  return (
    <div className="title">
      <input type="text" value={keypad} readOnly />
      <div className="flex" onClick={onClickH}>        
        <div id="1" className="box">1</div>
        <div id="2" className="box">2<br/>ABC</div>
        <div id="3" className="box">3<br/>DEF</div>
        <div id="4" className="box">4<br/>GHI</div>
        <div id="5" className="box">5<br/>JKL</div>
        <div id="6" className="box">6<br/>MNO</div>
        <div id="7" className="box">7<br/>PQRS</div>
        <div id="8" className="box">8<br/>TUV</div>
        <div id="9" className="box">9<br/>WXYZ</div>
        <div id="10" className="box">*</div>
        <div id="11" className="box">0</div>
        <div id="12" className="box">#</div>
      </div>
    </div>
  );
}

export default Keypad;
