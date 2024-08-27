import React from "react";

function LeftSection({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src={imageUrl} className=""/>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
                Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
            <a href={learnMore} style={{ textDecoration: "none", marginLeft:"30px" }}>
                Learn More <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
          
          <div className="mt-3">
            <a href={googlePlay} style={{ textDecoration: "none" }}>
                <img src="media/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{ textDecoration: "none", marginLeft:"30px" }}>
                <img src="media/appstoreBadge.svg" />
            </a>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LeftSection;
