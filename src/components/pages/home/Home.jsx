import React from 'react'
import Notecard from '../../molecules/notecard/Notecard'
import {HomeWrapper, AppDisplay, WebDisplay} from './Home.styles'
import Searchbar from '../../molecules/searchbar/Searchbar'
const Home = () => {
  return (
    <HomeWrapper>
      <AppDisplay>
       <Searchbar placeholder= "Search anything....."/>
       <Notecard />

      </AppDisplay>
      <WebDisplay>

      </WebDisplay>
    </HomeWrapper>
  )
}

export default Home
