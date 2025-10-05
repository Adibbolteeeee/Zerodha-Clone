function Education() {
    return ( 
        <div className="container mt-5 p-5 mb-5">
            <div className="row">
                <div className="col-lg-5 col-sm-12">
                    <img src="/media/images/education.svg" alt="Education Image" style={{width:"90%"}} />
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-6 col-sm-12">
                    <h1 className="mb-5 fs-2">Free and open market education</h1>
                    <p>Varsity, The largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href="#" style={{textDecoration:"none"}}>Varsity <i className="fa-solid fa-arrow-right"></i></a>

                    <p className="mt-5">Trading Q&A, The most active trading and investment community in India for all your market related queries.</p>
                    <a href="#" style={{textDecoration:"none"}}>Trading Q&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;