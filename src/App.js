import './App.css';
import { MovieCard } from "./components/MovieCard";
import store from './redux/reducers/store'
import { Provider } from 'react-redux'
import { Banner } from './components/Banner'
import { Footer } from './components/Footer'

function App() {
  return (
    <Provider store={ store }>
      <div>
      <Banner />
       <MovieCard />
      <Footer />
      </div>
    </Provider>
    
  );
}

export default App;
