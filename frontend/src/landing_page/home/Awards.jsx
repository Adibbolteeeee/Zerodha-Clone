function Award() {
    return ( 
        <div className="container mt-5 mb-5 ">
            <div className="row">
                <div className="col-lg-6 col-sm-12 p-5">
                    <img src="/media/images/largestBroker.svg" alt="LargestBroker Image" />
                </div>
                <div className="col-lg-6 col-sm-12 p-5">
                    <h1 className="mt-3">Largest stock broker in India</h1>
                    <p className="mb-5">2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in: </p>


                    <div className="row">
                        <div className="col">
                            <ul>
                                <li>
                                    <p>Future and Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>Currency derivatives</p>
                                </li>
                            </ul>
                        </div>

                        <div className="col">
                            <ul>
                                <li>
                                    <p>Stocks & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Govt. Securities</p>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                    <img src="/media/images/pressLogos.png" alt="PressLogo Image" style={{width:"90%", height:"2rem", marginTop:"1rem"}} />
                </div>
            </div>
        </div>
    );
}

export default Award;
