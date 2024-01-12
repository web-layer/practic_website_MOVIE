
import React, { useEffect, useState } from 'react';
import './css/style.css';
import {Container} from 'react-bootstrap'
import Header from './componenets/header';
import HeroContent from './componenets/hero-content';
import SectionUpcoming from './componenets/SectionUpcoming';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import MoviesDetails from './componenets/moviesDetails';
import Footer from './componenets/footer';


const App = () => {
   let [Movies, getMovies] = useState([])
   console.log(Movies)
let [showHero, setHero] = useState(true) 
console.log(showHero)

   let getAllMovies = async() => {
      await fetch("https://api.themoviedb.org/3/movie/popular?api_key=2ed27428d49a7dff95d8705d52d37dee&!language=en-US&page=1")
       .then((response)=> {return response.json()})
       .then((listMovies) => {return getMovies(listMovies.results)})
   }

   useEffect(() => {
       getAllMovies()
   }, [])


   let searchmovies = async(word) => {
        let x = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=2ed27428d49a7dff95d8705d52d37dee&query=${word}&include_adult=false&language=en-US&page=1`)
          .then(response => {return response.json()})
          .then(data => {return getMovies(data.results)})

   }




  


   return (
      <>
         <Header search={searchmovies}></Header>
         {showHero && <HeroContent/>}
         <BrowserRouter>
            <Routes>
               <Route  path='/' element={ <SectionUpcoming movies={Movies}></SectionUpcoming>}/>
               <Route  path='/movie/:id' element={<MoviesDetails setHero={setHero}/>}/>
            </Routes>
         </BrowserRouter>
<Footer></Footer>
      </>
   )
}




export default App


