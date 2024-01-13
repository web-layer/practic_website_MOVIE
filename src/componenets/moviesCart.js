import React from "react";
import { Container } from "react-bootstrap";
import {Link} from 'react-router-dom';

let cartMovies = ({movie}) => {
    const releasedate = new Date(movie.release_date)
    const getyear = releasedate.getFullYear()

    return (
        <div className="wrapper-Movies">
            <Link to={`/movie/${movie.id}`}>
            <div className="cart">
                <figure className="img">
                <img src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}/>

                </figure>
                    <div className="infoMoveis">
                    <div>
                     <h3>{movie.title} </h3>
                        <span className="time">{getyear} </span>
                    </div>
                       
                        <div>
                        <div className='badge outline'>HD</div>
                       <span>
                       <i class="fa-solid fa-star"></i>
                       {movie.vote_average}
                       </span>
                        </div>
                    </div>
            </div>
            </Link>
        </div>
    )
}

export default cartMovies