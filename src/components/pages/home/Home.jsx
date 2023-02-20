import React from 'react'
import Categorybutton from '../../molecules/categorybuttons/Categorybutton'
import Notecard from '../../molecules/notecard/Notecard'
import {HomeWrapper, AppDisplay, WebDisplay} from './Home.styles'

const Home = () => {
  return (
    <HomeWrapper>
      <AppDisplay>
        <Categorybutton />
        <Notecard />

      </AppDisplay>
      <WebDisplay>

      </WebDisplay>
    </HomeWrapper>
  )
}

export default Home
