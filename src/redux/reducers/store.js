import { createStore } from "redux";
import { reducerCard } from '../reducers/reducerCard'
import { listeFilms } from "../../test";


const store = createStore(reducerCard, listeFilms)

export default store

console.log(store.getState())
