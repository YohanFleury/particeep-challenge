import { ADD_DISLIKE, ADD_LIKE, DELETE_CARD } from './constants'

// Helpers to make the code cleaner inside the reducer

const helperAddLike = (state, id) => {
    const index = state.findIndex(movie => movie.id === id)
            const mov = state[index];
            mov.likes = mov.likes+1;
            return [
                ...state.slice(0, index),
                mov,
                ...state.slice(index+1)
            ]
}

const helperAddDislike = (state, id) => {
    const index2 = state.findIndex(movie => movie.id === id)
    const mov2 = state[index2];
    mov2.dislikes = mov2.dislikes+1;
    return [
        ...state.slice(0, index2),
        mov2,
        ...state.slice(index2+1)
    ]
}

const helperDeleteCard = (state, id) => {
    const cards = state.filter(card => card.id !== id)
    return cards
}

// Reducer

export const reducerCard = (state, action) => {
    switch (action.type) {
        case ADD_LIKE:
            state = helperAddLike(state, action.payload)
            return state

        case ADD_DISLIKE:
            state = helperAddDislike(state, action.payload)
            return state

        case DELETE_CARD:
        state = helperDeleteCard(state, action.payload)
        return state
    
        default: return state
    }
}
