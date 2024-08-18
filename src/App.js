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

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={inc}>증가버튼</button>
      <Box />
    </div>
  );
}

export default App;
