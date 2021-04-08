import './App.css';
import { MovieCard } from "./components/MovieCard";
import store from './redux/reducers/store'
import { Provider } from 'react-redux'
import { Banner } from './components/Banner'


function App() {
  return (
    <Provider store={ store }>
      <div>
      <Banner />
      <MovieCard />
      </div>
    </Provider>
    
  );
}

export default App;
