import React from "react";
import img12 from "./images/img12.jpg";
import img2 from "./images/img2.jpg";
const Service = () => {
return(
<>
<div className="container-fluid mb-2">
   <div className="service-img">
      <img src={img12} class="d-block w-100" alt="..." /> 
   </div>
</div>
<div className="container-fluid mb-2">
   <div className="row">
      <div className="col-md-8">
         <img src={img2} class="d-block w-100" alt="..." /> 
      </div>
      <div className="col-md-4">
         <h2>Our technology Help the industry</h2>
         <p>A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
            A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
         </p>
         <p>A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
            A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
         </p>
         <button className="text-center">Submit</button>
      </div>
   </div>
</div>
<div className="container-fluid mb-4">
   <div className="text-center">
      <h5>HOW IT WORKS</h5>
      <h2>Expect Work with Us</h2>
   </div>
   <div className="row bg-dark service-text">
      <div className="col-md-4">
         <h2>Research</h2>
         <p>A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
            A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
         </p>
      </div>
      <div className="col-md-4">
         <h2>Crafting</h2>
         <p>A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
            A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
         </p>
      </div>
      <div className="col-md-4">
         <h2>Launch Beta</h2>
         <p>A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
            A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
         </p>
      </div>
   </div>
</div>
</>
)
};
export default Service;