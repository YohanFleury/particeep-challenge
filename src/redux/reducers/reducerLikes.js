import { ADD_DISLIKE, ADD_LIKE } from './constants'




export const reducerLikes = (state=[], action) => {
    switch (action.type) {
        case ADD_LIKE:
            const index = state.findIndex(movie => movie.id === action.payload)
            const mov = state[index];
            mov.likes = mov.likes+1;
            return [
                ...state.slice(0, index),
                mov,
                ...state.slice(index+1)
            ]
        case ADD_DISLIKE:
            const index2 = state.findIndex(movie => movie.id === action.payload)
            const mov2 = state[index2];
            mov2.dislikes = mov2.dislikes+1;
            return [
                ...state.slice(0, index2),
                mov2,
                ...state.slice(index2+1)
            ]
    
        default: return state
    }
}
