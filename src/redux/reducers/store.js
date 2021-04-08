import { createStore, combineReducers } from "redux";
import {reducerLikes} from '../reducers/reducerLikes'
import {reducerCards} from '../reducers/reducerCards'
import { listeFilms } from "../../test";



const rootReducer = combineReducers({
    likes: reducerLikes,
    cards: reducerCards
})

const store = createStore(reducerLikes, listeFilms)

export default store

console.log(store.getState())
