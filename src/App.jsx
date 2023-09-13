import { useState,useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import Movie from './Movie.jsx';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchText , setSearchText] = useState("One Piece");


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  }


  useEffect (() => {
    searchMovies("One Piece")
  },[]);

  return (
   <div className= "app">
    <h1> MovieLand</h1>
    <div className="search">
      <input 
      placeholder="Search for movies"
      value = {searchText}
      onChange={(e)=>{setSearchText(e.target.value)}}/>

      <img 
      src={SearchIcon}
      alt="search"
      onClick={()=>{searchMovies(searchText)}}
      />
    </div>
    {
      movies?.length > 0 ?(
      <div className="container">
        {movies.map((movie)=>(
          <Movie movie = {movie}/>
        ))}
    </div>): (
      <div className="empty">
        <h2>No movies found</h2>
      </div>
    )
    }
    

   </div>
  )
}

export default App;