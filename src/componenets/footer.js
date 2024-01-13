import React from "react";
import { Button , Container} from 'react-bootstrap';
let Footer = () => {
    return (
        <div className="section-footer">
            <Container>
                <div className="content-footer">
                    <div className="footer-logo">
                         <img width="200px" src={process.env.PUBLIC_URL + 'logo2.png'}/>
                    </div>
                    <div className="nav">
                        <ul>
                            <li>HOME</li>
                            <li>MOVIE</li>
                            <li>TV SHOW</li>
                            <li>PRICING</li>
                        </ul>


                    </div>
                    <input type="text" placeholder="search for movies"/>
                </div>
            </Container>
        </div>
    )
}

export default Footer
