import React from 'react'
import './text.css'

const Text = ({type, color, children}) => {
    {
        if(type === "h1"){
            return(
                <h1 className={color}>  {children} </h1>
            )
        }else
        if(type === "h2"){
            return(
                <h2 className={color}>{children}</h2>
            )
        }else
        if(type === "h3"){
            return(
                <h3 className={color}>{children}</h3>
            )
        }else
        if(type === "h4"){
            return(
                <h4 className={color}>{children}</h4>
            )
        }else
        if(type === "h5"){
            return(
                <h5 className={color}>{children}</h5>
            )
        }else
        if(type === "h6"){
            return(
                <h6 className={color}>{children}</h6>
            )
        }else{
            return(
                <p className={color}>{children}</p>
            )
        }

    }

}

export default Text
