import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import MovieList from './Components/MovieList/MovieList';

function App() {
  return (
    <div>
      <Routes>
          <Route path='/' exact  element={<Home/>} />
          <Route path='/movilist' exact element={<MovieList/>} />
      </Routes>
    </div>
  );
}

export default App;