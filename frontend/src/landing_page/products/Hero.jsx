import React from 'react';

function Hero() {
    return ( 
        <div className="container mt-5 p-5">
            <div className="row text-center">
                <h1 className='mb-3 fs-3'>Zerodha Products</h1>
                <h5 className='text-muted mb-4'>Sleek, modern, and intuitive trading platforms</h5>
                <p className='mb-5'>Check out our <a href="/product" className='about-links'>investment offerings  <i className="fa-solid fa-arrow-right"></i></a></p>
                <hr className='mt-5 '/>
            </div>
        </div>
     );
}

export default Hero;