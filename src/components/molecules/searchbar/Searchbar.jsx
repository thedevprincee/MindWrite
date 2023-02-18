import React from 'react'
import './Searchbar.css' ;
import { FcSearch } from 'react-icons/fc';

function Searchbar({placeholder}) {
  return (
    <div  className="search">
      <div className="searchInput">
        <input type="text" placeholder={placeholder} />
        <div className="searchicon" > <FcSearch /></div>
      </div>
      <div className="datResult"></div>
     
    </div>
  )
}

export default Searchbar
