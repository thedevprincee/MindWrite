import { useState } from 'react'
import Text from './components/atoms/text/Text';
import Notecard from './components/molecules/notecard/Notecard';

const App = () => {
  return(
    <div className='container'>
      <Text />
      <Notecard />
      <Notecard />
    
    </div>
  )
}

export default App
