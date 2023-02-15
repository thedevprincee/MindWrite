import React from 'react'

const Text = (props) => {
    {
        if(props.type === "h1"){
            return(
                <h1>{props.children}</h1>
            )
        }else
        if(props.type === "h2"){
            return(
                <h2>{props.children}</h2>
            )
        }else
        if(props.type === "h3"){
            return(
                <h3>{props.children}</h3>
            )
        }else
        if(props.type === "h4"){
            return(
                <h4>{props.children}</h4>
            )
        }else
        if(props.type === "h5"){
            return(
                <h5>{props.children}</h5>
            )
        }else
        if(props.type === "h6"){
            return(
                <h6>{props.children}</h6>
            )
        }else{
            return(
                <p>{props.children}</p>
            )
        }

    }

}

export default Text
