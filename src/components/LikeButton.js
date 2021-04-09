import React from 'react'
import like from '.././assets/green-like.png'
import '../styles/ToggleButton.css'


export const LikeButton = (props) => {
    return (
        <div>
            <img src={like} alt="like" className="like-button" onClick={props.onClick} />
        </div>
    )
}
