import { useState } from "react";
import "./App.css"
import { Search } from "./components/Searchbar";
import { Subtitulo } from "./components/subtitulo";
import { Titulo } from "./components/titulo";
import axios from "axios"



function App() {

  const [movie, setMovie]= useState()
    
  function handleSearchMovie(titulo){
    axios.get(`http://www.omdbapi.com/?apikey=8b35bbc8&t=${titulo}`)
    .then((response)=> {console.log(response.data) 
      setMovie(response.data)}) 
   
  }
   
    
     return (
    
      
    <div className="main-container">
       

      <Titulo />
      <Subtitulo />
      <Search pesquisarfilme={handleSearchMovie} />
      {movie&&(
      <div>
      <div className="titulodofilme">
      <h1>{movie.Title} </h1>
      </div>
      <h2 className="informacoes"> actors: {movie.Actors}</h2>
      
      <h8 className="containers">
      <img src= {movie.Poster} align="right"></img></h8>
      <h3 className="informacoes"> Awards: {movie.Awards}</h3>
      <h4 className="informacoes"> BoxOffice: {movie.BoxOffice}</h4>
      <h5 className="informacoes"> Country: {movie.Country}</h5>
      <h6 className="informacoes">Director: {movie.Director}</h6>
      <h7 className="informacoes">Plot: {movie.Plot}</h7>
      </div>
      )}

    </div>
  );
}
export default App;
