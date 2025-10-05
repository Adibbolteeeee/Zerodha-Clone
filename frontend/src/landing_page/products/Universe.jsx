import React from 'react';
import {Link} from "react-router-dom";
function Universe() {
    return ( 
       <div className="container mt-5 p-5">
            <div className="row">
                <h4 className='text-center text-muted fs-5 mb-5'>Want to know more about our technology stack? Check out the <a href="/products" className='about-links'>Zerodha.tech </a>blog</h4>
            </div>
                
            <div className="row text-center mt-5 p-5">
                <h3 className='fs-4 mb-3' style={{fontWeight:"500",color:"#212529"}}>The Zerodha Universe</h3>
                <p className='fs-6 mb-5'>Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-lg-4 col-sm-12">
                    <img src="/media/images/zerodhaFundhouse.png" alt="FundHouse Image" className='product-logo' />
                    <p className='mb-5 universe-p'>Our asset management venture <br /> that is creating simple and transparent index <br /> funds to help you save your goals.</p>

                    <img src="/media/images/streakLogo.png" alt="Streak Image" className='product-logo mt-5' />
                    <p className="universe-p">Systematic trading platdform that allows you to create and backtest<br /> strategies without coding.</p>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <img src="/media/images/sensibullLogo.svg" alt="Sensibull Image" className='product-logo' />
                    <p className='mb-5 universe-p'>Option trading platform that lets you<br /> create strategies, analyze positions, and examine <br />data points like open interest, FII/DII, and more.</p>

                    <img src="media/images/smallcaseLogo.png" alt="smallcase Image" className='product-logo mt-5' />
                    <p className="universe-p">Thematic investing platform<br /> that helps you invest in diversified<br /> baskets of stocks on ETFs.</p>
                </div>

                <div className="col-lg-4 col-sm-12">
                    <img src="/media/images/goldenpiLogo.png" alt="Tijori Image" className='product-logo' />
                    <p className='mb-5 universe-p'>Investment research platform <br />that offers detailed insights on stocks,<br /> sectors, supply chains, and more.</p>

                    <img src="/media/images/dittoLogo.png" alt="Ditto Image" className='product-logo mt-5' />
                    <p className="universe-p">personalized advice on life<br /> and health insurance. No spam <br />and no mis-selling.</p>
                </div>
                <Link to={"/signup"} className='mt-5 mb-5'><button className='btn btn-primary p-2 fs-5' style={{width:"15rem"}}>Sign up for free</button></Link>
            </div>           
       </div>
     );
}

export default Universe;