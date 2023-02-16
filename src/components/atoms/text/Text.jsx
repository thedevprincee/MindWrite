import React from 'react'

const Text = ({type, children}) => {
    {
        if(type === "h1"){
            return(
                <h1>{children}</h1>
            )
        }else
        if(type === "h2"){
            return(
                <h2>{children}</h2>
            )
        }else
        if(type === "h3"){
            return(
                <h3>{children}</h3>
            )
        }else
        if(type === "h4"){
            return(
                <h4>{children}</h4>
            )
        }else
        if(type === "h5"){
            return(
                <h5>{children}</h5>
            )
        }else
        if(type === "h6"){
            return(
                <h6>{children}</h6>
            )
        }else{
            return(
                <p>{children}</p>
            )
        }

    }

}

export default Text
