function Pricing() {
    return ( 
       <div className="container  mt-5">
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>we pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a href="#" style={{textDecoration:"none"}}>See Pricing <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-lg-2"></div>
                <div className="col-lg-6 col-sm-12">
                    <div className="row text-center">
                        <div className="col border" style={{height:"12rem"}} >
                            <h1 className="mb-4 mt-3 p-2">&#8377;0</h1>
                            <p>Free equity delivery and <br /> direct mutual funds</p>
                        </div>
                        <div className="col border mb-5" style={{height:"12rem"}} >
                            <h1 className="mb-4 mt-3 p-2">&#8377;20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
       </div>
     );
}

export default Pricing;