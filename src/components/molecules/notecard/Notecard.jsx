import React from 'react'
import Text from '../../atoms/text/Text'
import { Bell } from 'react-feather';
import './notecard.css'

const Notecard = () => {
  return (
    <div className='card'>
        <div>
            <div className='bell'>
                <Bell />
            </div>
            <div>
                    <div className='title'>
                      <Text>Summer Vacation</Text>
                    </div>
            <div className=''>
              <Text>16 Feb 2023, 16:35 PM</Text>
            </div>
            </div> 
        </div>
     <div>
        <Text>Image</Text>
     </div>
     <div>
     <Text>Je m'appelle George Valérie, aujourd'hui j'ai eu un cours à Gomycode.</Text>
     </div>
    </div>
  )
}

export default Notecard
