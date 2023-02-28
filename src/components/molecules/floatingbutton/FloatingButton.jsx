import React from 'react'
import "./floatingButton.css"
import { Plus } from 'react-feather';

const FloatingButton = () => {
  return (
    <div className='floatcontainer'>
        <button className='btn'><Plus /></button>
    </div>
  )
}

export default FloatingButton
