import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import UpcomingAction from "./upcomingAction";
import MovieList from "./moviesList";


let SectionUpcoming = ({movies}) => {
    return (
        <>
            <UpcomingAction movies={movies}></UpcomingAction>
            <MovieList movies={movies}  ></MovieList>
        </>
    )
}

export default SectionUpcoming