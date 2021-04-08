import React from 'react'
import like from '.././assets/like.png'
import '../styles/ToggleButton.css'


export const LikeButton = (props) => {
    return (
        <div>
            <button className="btn btn-outline-success"> <img src={like} alt="like" className="like-button" onClick={props.onClick} /> </button>
        </div>
    )
}
