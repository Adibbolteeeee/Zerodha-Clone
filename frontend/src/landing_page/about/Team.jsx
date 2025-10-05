import { Link } from "react-router-dom";

function Team() {
    return ( 
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-lg-6 col-sm-12 text-center p-3">
                    <img src="/media/images/nithinKamath.jpg" alt="Founder Image" className='founder-img mb-3 mt-'/>
                    <h3 className='fs-5 mb-3' style={{fontWeight:"350"}}>Nithin Kamath</h3>
                    <p className='' style={{fontSize:".86rem",color:"#666666"}}>Founder, CEO</p>
                </div>
                <div className="col-lg-6 col-sm-12 px-5">
                    <h1 className='mb-5 fs-4'>People</h1>
                    <p className="about-p">Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p className="about-p">He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC)</p>

                    <p className="about-p">Playing basketball is his zen.</p>

                    <p>Connect on <Link to={"/"} className='about-links'>Homepage</Link> / <Link to={"/about"} className='about-links'>TradingQnA</Link> / <Link to={"/about"} className='about-links'>Twitter</Link></p>
                </div>
            </div>
        </div>
     );
}

export default Team;