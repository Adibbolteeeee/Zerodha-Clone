import React from 'react';

function RightSection({title,description,link, imageURL}) {
    return ( 
        <div className="container mt-5">
            <div className="row">
                <div className="col-lg-5 col-sm-12 px-5 right-section-col" style={{alignItems:"center"}}>
                    <h3 className='text-muted fs-4 mb-3 mt-5'>{title}</h3>
                    <p>{description}</p>
                    <a className="product-links" href="/product"> {link} <i className="fa-solid fa-arrow-right"></i></a>
                </div>
                <div className="col-lg-5 col-sm-12 p-5">
                    <img src={imageURL} alt="RightSection Image" style={{width:"40rem"}} className='product-image'/>
                </div>
                <div className="col-lg-2 "></div>
            </div>
        </div>
     );
}

export default RightSection;