import React from 'react'

export const DeleteButton = (props) => {
    return (
        <div>
            <button className="btn btn-outline-dark" onClick={props.onClick}>  X </button>
        </div>
    )
}
