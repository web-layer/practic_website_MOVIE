import React, { useEffect, useState }   from "react"
import { Container } from "react-bootstrap";
import { useParams} from 'react-router-dom';
let MoviesDetails = ({setHero}) => {
    let idMovies = useParams()
    let [detailsMovies, setdetailsMovies] = useState([])

    let getMoviesDetails = async() => {
       let data =  await fetch(`https://api.themoviedb.org/3/movie/${idMovies.id}?api_key=2ed27428d49a7dff95d8705d52d37dee&page=1&!language=en-US`)
         .then((response)=> {return response.json()})
         .then((movie) => {return setdetailsMovies(movie)})
     }

useEffect(() => {
    setHero(false)

    return () => {
        setHero(true)
    }
},[setHero])

useEffect(() => {
    getMoviesDetails()
},[])

console.log(detailsMovies)


    return (
        <>
        <div className="boxDetails">
            <div className="overlay"></div>
             <div className="boximage">
             <img src={"https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/"+detailsMovies.backdrop_path}/>
             </div>
            <Container>
                <div className="perent">
                <div className="img">
                    <img src={"https://image.tmdb.org/t/p/w500/"+detailsMovies.poster_path}/>
                </div>
                <div className="infoMovies">
                
                    <div> 
                         <h2>{ detailsMovies.title }</h2>  
                         <span> 
                            <i class="fa-solid fa-star"></i>
                            {detailsMovies.vote_average}
                        </span> 
                    </div>
                    <li>{ detailsMovies.release_date } </li>
                    <li> <span>language:</span> { detailsMovies.original_language } </li>
                    <li><span>overview:</span><p> { detailsMovies.overview } </p></li>
                    
                </div>
                </div>
            </Container>
        </div>
    </>
    )



}

export default MoviesDetails