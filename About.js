import React from "react";
import img6 from "./images/img6.jpg";
import img4 from "./images/img4.jpg";
import img10 from "./images/img10.jpg";
const About = () => {
return(
<>
<div className="container-fluid about-img"> 
   <img src={img6} class="d-block w-100" alt="..." />
</div>
<br />
<div className="container-fluid about-img">
   <div className="row">
      <div className="col-md-8">
         <img src={img4} class="d-block w-100" alt="..." />
      </div>
      <div className="col-md-4">
         <h2>ABOUT PROJECT</h2>
         <h5>The deep seo explorer with new technology.</h5>
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
      </div>
   </div>
</div>
<div className="container-fluid">
   <div className="row">
      <div className="col-md-4">
         <h2>New Processor</h2>
         <p>A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
            A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
         </p>
      </div>
      <div className="col-md-4">
         <h2>Control</h2>
         <p>A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
            A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
         </p>
      </div>
      <div className="col-md-4">
         <h2>Statisics</h2>
         <p>A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
            mainly to avoid overloading your site with request.
            A robots text file tells search engine crawlers which
            url the crawler can access on your site. this is used
         </p>
      </div>
   </div>
</div>
<div className="container-fluid vid-img">
   <img src={img10} class="d-block w-100" alt="..." />
</div>
</>
);
};
export default About;