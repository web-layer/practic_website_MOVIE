import React, { useEffect, useState } from 'react';
import { Container, Form, Nav } from 'react-bootstrap';


let Header = ({search}) => {
    let [active, setactive] = useState(true)
    useEffect(() => {
        window.addEventListener("scroll", isscroll)
    })

    let isscroll = () => {
        let header = document.querySelector(".header")
        if(window.scrollY >= 100) {
            header.classList.add("active")
        }else {
            header.classList.remove("active")
        }
    }

    let onsearch = (value) => {
        search(value)
    }
    

    return (
        <div className='header'>
            <Container>
             <div className='navber'>
                <div className='logoheader'>
                    <img src={process.env.PUBLIC_URL + 'logo2.png'}/>
                </div>

                <nav className={active ? "open" : "close"}>

                <div className='logo'>
                    <img  src='logo2.png'/>

                    <div className='close' onClick={() => setactive(!active)} >
                    <i class="fa-solid fa-square-xmark"></i>
                    </div>
                </div>

                    <ul>
                        <Nav.Link className='Link' href="/home">home</Nav.Link>
                        <Nav.Link className='Link' href="/home">MOVIE</Nav.Link>
                        <Nav.Link className='Link' href="/home">TV SHOW</Nav.Link>
                        <Nav.Link className='Link' href="/home">WEB SERIES</Nav.Link>
                        <Nav.Link className='Link' href="/home">PRICING</Nav.Link>
                    </ul>
                </nav>

                <div className='box'>
                    <div className='searsh'>
                        <input type='text' onChange={(e) => onsearch(e.target.value)} placeholder='search for movies'/>
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <i class="fa-solid fa-caret-down"></i>

                        <select size='sm' className='select'>
                            <option className='text'>AU</option>
                            <option value="1">EN</option>
                            <option value="2">AR</option>
                        </select>

                        <div  onClick={() => setactive(!active)} className='menu'>
                            <i class="fa-solid fa-bars"></i>
                        </div>

                        <button className='btnSIGN'>SIGN IN</button>

                </div>

                
                </div>
            </Container>
        </div>
    )
}

export default Header
