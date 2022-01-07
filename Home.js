import React from "react";
import Footer from "./Footer";
import img12 from "./images/img12.jpg";
import img10 from "./images/img10.jpg";
import img8 from "./images/img8.png";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
const Home = () => {
return(
<>
<div className="container-fluid">
   <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
         <div class="carousel-item active images">
            <img src={img12} class="d-block w-100" alt="..." />
         </div>
         <div class="carousel-item images">
            <img src={img10} class="d-block w-100" alt="..." />
         </div>
         <div class="carousel-item images">
            <img src={img7} class="d-block w-100" alt="..." />
         </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
      </button>
   </div>
</div>
<div className="container-fluid">
   <div className="row">
      <div className="col-md-6">
         <div className="conteat">
            <h1>Topping intelligence <br /> through tolent.</h1>
         </div>
      </div>
      <div className="col-md-6">
         <div className="conteat">
            <p>Ever heard about wschools spces here you can create your 
               website from scratch or use a template and host it for free.
               Ever heard about wschools spces here you can create your 
               website from scratch or use a template and host it for free.
               Ever heard about wschools spces here you can create your 
               website from scratch or use a template and host it for free.
            </p>
         </div>
      </div>
   </div>
</div>
<div className="container-fluid">
   <div className="img2">
      <img src={img1} class="d-block w-100" alt="..." />
   </div>
</div>
<br />
<div className="container-fluid">
   <div className="row">
      <div className="col-md-4">
         <div className="conteat">
            <img src={img8} class="d-block w-100" alt="..." />
            <p>Ever heard about wschools spces here you can create your 
               website from scratch or use a template and host it for free.
               Ever heard about wschools spces here you can create your
            </p>
         </div>
      </div>
      <div className="col-md-4">
         <div className="conteat">
            <img src={img6} class="d-block w-100" alt="..." />
            <p>Ever heard about wschools spces here you can create your 
               website from scratch or use a template and host it for free.
               Ever heard about wschools spces here you can create your 
            </p>
         </div>
      </div>
      <div className="col-md-4">
         <div className="conteat">
            <img src={img7} class="d-block w-100" alt="..." />
            <p>Ever heard about wschools spces here you can create your 
               website from scratch or use a template and host it for free.
               Ever heard about wschools spces here you can create your 
            </p>
         </div>
      </div>
   </div>
</div>
<div className="container-fluid">
   <div className="row">
      <div className="col-md-4">
         <div className="conteat">
            <img src={img12} class="d-block w-100" alt="..." />
            <p>Ever heard about wschools spces here you can create your 
               website from scratch or use a template and host it for free.
               Ever heard about wschools spces here you can create your
            </p>
         </div>
      </div>
      <div className="col-md-4">
         <div className="conteat">
            <img src={img1} class="d-block w-100" alt="..." />
            <p>Ever heard about wschools spces here you can create your 
               website from scratch or use a template and host it for free.
               Ever heard about wschools spces here you can create your 
            </p>
         </div>
      </div>
      <div className="col-md-4">
         <div className="conteat">
            <img src={img6} class="d-block w-100" alt="..." />
            <p>Ever heard about wschools spces here you can create your 
               website from scratch or use a template and host it for free.
               Ever heard about wschools spces here you can create your 
            </p>
         </div>
      </div>
   </div>
</div>
<Footer />
</>
);
};
export default Home;