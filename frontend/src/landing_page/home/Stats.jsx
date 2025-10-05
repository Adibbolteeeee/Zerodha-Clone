function Stats() {
    return ( 
        <div className="container ">
            <div className="row p-3">
                <div className="col-lg-6 col-sm-12 p-5">
                    <h1 className="mb-5 fs-2">Trust with confidence</h1>

                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">That's why 1.3+ crore customers trust Zerodha with &#8377; 3.5+ lakh crores worth of equity investments.</p>

                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">No gimmicks, spam, "gamification",or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p> 
                </div>
                <div className="col-lg-6 col-sm-12 p-5 mb-5">
                    <img src="/media/images/ecosystem.png" alt="Ecosystem Image" width={"90%"} />
                    <div className="text-center" >
                        <a href="#" style={{marginRight:"3rem",textDecoration:"none"}}>Explore our products <i className="fa-solid fa-arrow-right"></i></a>
                        <a href="#" style={{textDecoration:"none"}}>Try Kite demo</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Stats;