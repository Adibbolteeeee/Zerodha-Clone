import {Link} from "react-router-dom"
function Hero() {
    return ( 
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <img src="/media/images/homeHero.png" alt="HomeHero Image" className="mb-5"/>
                <h1 className="mt-5">Invest in everything</h1>
                <p>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
                <Link to="/signup"><button style={{width:"20%", margin:"0 auto" }} className="btn btn-primary mt-4 p-2 fs-5">Signup Now</button></Link>
            </div>
        </div>
     );
}

export default Hero;