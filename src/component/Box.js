import React from 'react'
import { useSelector } from 'react-redux'
import GrandSonBox from './GrandSonBox'



const Box = () => {
    let count = useSelector(state=>state.count)

  return (
    <div>Box {count}
    <GrandSonBox />
    </div>
  )
}

export default Box