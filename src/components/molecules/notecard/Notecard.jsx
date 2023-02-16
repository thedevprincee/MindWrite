import React from 'react'
import Text from '../../atoms/text/Text'
import { MdOutlineNotificationsActive } from 'react-icons/md'

const Notecard = () => {
  return (
    <div className='card'>
    <MdOutlineNotificationsActive />
     <Text>Summer Vacation</Text>
     <Text>16 Feb 2023, 16:35 PM</Text> 
     <Text>Je m'appelle George Valérie, aujourd'hui j'ai eu un cours à Gomycode.</Text>
    </div>
  )
}

export default Notecard
