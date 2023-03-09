import './App.css';
import React,{useState} from 'react';
 
 const App = () => {
  const [counter,setCounter] = useState(0);
 
  //increase counter
  const INCER = () => {
    setCounter(count => count + 1);
  };

//decrease counter 
  const DECR = () => {
    setCounter(count => count - 1);
  }; 
  
  //multiple counter
  const MULT = () => {
    setCounter(count => count * 2);
  }; 

  //division counter
  const DIV = () => {
    setCounter(count => count / 2);
  }; 
 
  
  return (
    <div className="counter">
      <h1>React Counter</h1>

       <div className="counter__output">{counter}</div>

       <div className="btn__container">
        <button className="control__btn" onClick={INCER}>+</button>
        <button className="control__btn" onClick={DECR}>-</button>
        <button className="control__btn" onClick={MULT}>*</button>
        <button className="control__btn" onClick={DIV}>/</button>

      </div>       
      </div>       
  );
};

export default App;
