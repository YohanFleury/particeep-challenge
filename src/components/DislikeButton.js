import React from 'react'
import dislike from '.././assets/youtube-dislike.png'
import '../styles/ToggleButton.css'

export const DislikeButton = (props) => {
    return (
        <div>
            <img src={dislike} alt="like" className="dislike-button" onClick={props.onClick} />            
        </div>
    )
}
