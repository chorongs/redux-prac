import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Box from './component/Box';

function App() {
  const count = useSelector(state=>state.count)
  const dispatch = useDispatch()


  const inc = () => {
    dispatch({type:"INCREMENT"})

  }

  const dec = () => {
    dispatch({ type: "DECREMENT" });
}

const reset = () => { // 초기화 함수 추가
  dispatch({ type: "RESET" });
}

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
      <button onClick={inc}>증가</button>
      <button onClick={dec}>감소</button>
    </div>
    <button className="reset-button" onClick={reset}>초기화</button>
      <Box />
    </div>
  );
}

export default App;
