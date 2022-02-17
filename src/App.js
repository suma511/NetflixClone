import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import MovieList from './Components/MovieList/MovieList';
import FavList from './Components/FavList/FavList' ;


function App() {
  return (
    <div>
      <Routes>
          <Route path='/' exact  element={<Home/>} />
          <Route path='/movilist' exact element={<MovieList/>} />
          <Route path='/FavList' exact  element={<FavList/>} />
      </Routes>
    </div>
  );
}

export default App;