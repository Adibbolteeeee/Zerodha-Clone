import React from 'react';
import { Link } from 'react-router-dom';
function Hero() {
    return ( 
        <div className="container ">
            <div className="row mt-5 mb-5 text-center">
                <h1 className='fs-4'>We pioneered the discount broking model in India.</h1>
                <h1 className='fs-4'>Now, we are breaking ground with our technology.</h1>
            </div>
            <hr className='my-5' />
            <div className="row py-5">
                <div className="col-1 "></div>
                <div className="col-lg-5 col-sm-12">
                    <p className="about-p">We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier</p>

                    <p className="about-p">Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                    <p className="about-p">Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail <br />trading volumes.</p>
                </div>
                <div className="col-lg-5 col-sm-12">
                    <p className="about-p">In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                    <p className="about-p"><Link to={"/about"} className='about-links'>Rainmatter</Link>,  our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets. </p>

                    <p className="about-p">And yet, we are always up to something new every day. Catch up on the latest updates on our <Link to={"/about"} className='about-links'>blog</Link> or see what the media is <Link to={"/about"} className='about-links'>saying about us</Link> or learn more about our business and product <Link to={"/about"} className='about-links'>philosophies</Link>.</p>
                </div>
                <div className="col-1"></div>
            </div>
        </div>
     );
}

export default Hero;