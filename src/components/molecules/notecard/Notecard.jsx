import React from 'react'
import Text from '../../atoms/text/Text'
import { Bell } from 'react-feather';
import './notecard.css'

const Notecard = () => {
  return (
    <div className='card' id='container'>
        <div className='sec1'>
            <div className='bell'>
             <Bell className='notification-icon' />
            </div>
                <div className='details'>
                    <div className='title'>
                      <Text>Summer Vacation</Text>
                    </div>
                  <div className='date'>
                    <Text>16 Feb 2023, 16:35 PM</Text>
                  </div>
              </div> 
             </div>
           <div className='img'>
         <Text>Image</Text>
         </div>
           <div className='notes'>
          <Text>Je m'appelle George Valérie, aujourd'hui j'ai eu un cours à Gomycode.</Text>
         </div>
    </div>
  )
}

export default Notecard
