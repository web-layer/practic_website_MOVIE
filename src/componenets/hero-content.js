import React, {  } from 'react';
import { Container, Form, Nav } from 'react-bootstrap';


let heroContent = () => {

    
    return (
        <div className='hero'>
            <Container>
            <div className='hero-content'>
                <div className='content'>
                    <p>MovieVista</p>
                    <h1 className='hero-title'>
                    Unlimited <span>Movie</span>, TVs Shows, & More.
                    </h1>
                </div>
                <div className='meta-wrapper'>
                    <div className='badge-wrapper'>
                        <div className='badge fill'>PG 18</div>
                        <div className='badge outline'>HD</div>
                    </div>
                    <div className='genre-wrapper'>
                        <a href='#'>Romance,</a>
                        <a href='#'>Drama</a>
                    </div>
                    <div className='data-time'>
                        <div>
                        <i class="fa-solid fa-calendar-days"></i>
                        <time dateTime='2023'>2023</time>
                        </div>
                        <div>
                        <i class="fa-solid fa-clock"></i>
                        <time dateTime='min'>128 min</time>
                        </div>
                    </div>
                </div>

          <button>
          <i class="fa-regular fa-circle-play"></i>
          <span>WATCH NOW</span>
          </button>
            </div>
            </Container>
        </div>
    )
}

export default heroContent