import React from 'react';
import {Link} from "react-router-dom";
function OpenAccount() {
    return ( 
       <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-5 fs-1 mb-3">Open a Zerodha account</h1>
                <p className='text-muted'>Modern platforms and apps, &#8377;0 investments, and flat &#8377;20 intraday and F&O trades.</p>
                <Link to={"/signup"}><button style={{width:"15rem", margin:"0 auto" }} className="btn btn-primary mt-2 p-2 fs-6">Sign up for free</button></Link>
            </div>
        </div>
     );
}

export default OpenAccount;