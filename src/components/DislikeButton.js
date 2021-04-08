import React from 'react'
import dislike from '.././assets/dislike.png'
import '../styles/ToggleButton.css'

export const DislikeButton = (props) => {
    return (
        <div>
            <button className="btn btn-outline-danger"> <img src={dislike} alt="like" className="like-button" onClick={props.onClick} /> </button>            
        </div>
    )
}
