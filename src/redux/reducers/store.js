import { createStore } from "redux";
import { reducerCard } from '../reducers/reducerCard'
import { listeFilms } from "../../test";
import { movies$ } from "../../movies"

const store = createStore(reducerCard, listeFilms)

export default store

console.log(store.getState())
