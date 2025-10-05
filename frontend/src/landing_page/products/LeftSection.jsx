import React from "react";

function LeftSection({
  imageURL,
  title,
  description,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row ">
        <div className="col-lg-5 col-sm-12 ">
          <img src={imageURL} alt="leftImage" style={{ width: "35rem", height:"30rem" }} className="product-image" />
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-5 col-sm-12 left-section-col">
          <h3 className="text-muted fs-4 mb-4">{title}</h3>
          <p className="product-description">{description}</p>
          <div className="mb-4">
            <a href="/poduct" className="product-links">
              {tryDemo} <i className="fa-solid fa-arrow-right"></i>
            </a>
             <a href="/product" className="product-links">
              {learnMore} <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          <div>
            <a href="/product" >
              <img src={googlePlay} alt="googleplay logo" className="product-image" />
            </a>
            <a href="/product" >
              <img src={appStore} alt="appstore logo" className="product-image"/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
