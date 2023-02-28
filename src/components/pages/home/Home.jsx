import React from 'react'
import Notecard from '../../molecules/notecard/Notecard'
import {HomeWrapper, AppDisplay, WebDisplay} from './Home.styles'
import FloatingButton from '../../molecules/floatingbutton/FloatingButton'

const Home = () => {
  return (
    <HomeWrapper>
      <AppDisplay>
        <Notecard />

        <FloatingButton/>
      </AppDisplay>
      <WebDisplay>

      </WebDisplay>
    </HomeWrapper>
  )
}

export default Home
