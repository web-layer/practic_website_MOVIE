import React from "react";
import { Container } from "react-bootstrap";
import CartMovies from "./moviesCart";
let movieList = ({movies}) => {
    return (
        <Container>
            <div className="moviescart">
                {movies.length >= 1 ? (movies.map((items) => {
                    return (
                        <a key={items.id} href="#">
                            <CartMovies  movie={items}></CartMovies>
                        </a>
                    )
                })) : <h2 className="text">this movie dose not exist...</h2>

                }

            </div>
        </Container>
    )
}

export default movieList