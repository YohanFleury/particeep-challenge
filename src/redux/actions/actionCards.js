import {DELETE_CARD} from '../reducers/constants'

export const deleteCard = id => {
    return {
        type: DELETE_CARD,
        payload: id
    }
}