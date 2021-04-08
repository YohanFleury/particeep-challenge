import './App.css';
import { MovieCard } from "./components/MovieCard";
import store from './redux/reducers/store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={ store }>
      <div>
      <MovieCard />
      </div>
    </Provider>
    
  );
}

export default App;
