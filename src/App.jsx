import { useState } from 'react'
import Notecard from './components/molecules/notecard/Notecard'
import Home from './components/pages/home/Home'
const App = () => {
  return(
    <>
      <Home />
      <Notecard  />
      <Notecard />
    </>
  );
};

export default App
