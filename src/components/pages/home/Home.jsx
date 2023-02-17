import React from 'react'
import Notecard from '../../molecules/notecard/Notecard'
import {HomeWrapper, AppDisplay, WebDisplay} from './Home.styles'

const Home = () => {
  return (
    <HomeWrapper>
      <AppDisplay>
        <Notecard />

      </AppDisplay>
      <WebDisplay>

      </WebDisplay>
    </HomeWrapper>
  )
}

export default Home
