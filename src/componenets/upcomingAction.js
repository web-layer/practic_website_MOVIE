import React from "react";
import { Container } from "react-bootstrap";
let UpcomingAction = () => {


    return (
        <div className="upcoming">
                <Container>
                    <div className="flex-wrapper">
                        <div className="title-wrapper">
                            <h2>Upcoming Movies</h2>
                        </div>

                        <ul className="fillterAction">
    
                            <li>
                                <button className="filter-btn">Robot</button>
                            </li>
                            <li>
                                <button    className="filter-btn">Anime</button>
                            </li>
                            <li>
                                <button  className="filter-btn">TV Shows</button>
                            </li>
                        </ul>
                    </div>
                </Container>
           
        </div>
    )
}

export default UpcomingAction