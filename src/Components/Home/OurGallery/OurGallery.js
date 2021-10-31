import React from "react";
import "./OurGallery.css";

const OurGallery = () => {
  return (
    <div className="my-5">
      <h2 className="text-info">Our Trips Gallery</h2>

      <h4 className="my-3 text-light">
        We have arranged the best of the trips for our clients through out the
        years and following are some of the memories.
      </h4>

      <div className="responsive">
        <div className="gallery">
          <a
            target="_blank"
            href="https://i.ibb.co/fXL864t/kalle-schmitz-dmpiz-ZMrs8-unsplash.jpg"
          >
            <img
              src="https://i.ibb.co/fXL864t/kalle-schmitz-dmpiz-ZMrs8-unsplash.jpg"
              alt="Cinque Terre"
              width="600"
              height="400"
            />
          </a>
          <div className="desc text-light">Best trip in the cox's bazar.</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a
            target="_blank"
            href="https://i.ibb.co/1M7dzSR/s-o-c-i-a-l-c-u-t-Fx-Ygx-A6w-Yp-Q-unsplash.jpg"
          >
            <img
              src="https://i.ibb.co/1M7dzSR/s-o-c-i-a-l-c-u-t-Fx-Ygx-A6w-Yp-Q-unsplash.jpg"
              alt="Forest"
              width="600"
              height="400"
            />
          </a>
          <div className="desc text-light">
            5th April, 2021. The Best Trip in Dubai.
          </div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a
            target="_blank"
            href="https://i.ibb.co/NtYxKFP/mika-baumeister-9-PLAFb-Xois-unsplash.jpg"
          >
            <img
              src="https://i.ibb.co/NtYxKFP/mika-baumeister-9-PLAFb-Xois-unsplash.jpg"
              alt="Northern Lights"
              width="600"
              height="400"
            />
          </a>
          <div className="desc text-light">Awesome trip in Paris!</div>
        </div>
      </div>

      <div className="responsive">
        <div className="gallery">
          <a
            target="_blank"
            href="https://i.ibb.co/F0Hqbj4/s-o-c-i-a-l-c-u-t-S7-k-X92aa-BE-unsplash.jpg"
          >
            <img
              src="https://i.ibb.co/F0Hqbj4/s-o-c-i-a-l-c-u-t-S7-k-X92aa-BE-unsplash.jpg"
              alt="Mountains"
              width="600"
              height="400"
            />
          </a>
          <div className="desc text-light">Last Year in the Himalaya!</div>
        </div>
      </div>

      <div className="clearfix"></div>
    </div>
  );
};

export default OurGallery;
