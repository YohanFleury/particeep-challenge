import { ADD_LIKE, ADD_DISLIKE } from '../reducers/constants'

export const addLike = id => {
    return {
        type: ADD_LIKE,
        payload: id
    }
}

export const addDislike = id => {
    return {
        type: ADD_DISLIKE,
        payload: id
    }
}