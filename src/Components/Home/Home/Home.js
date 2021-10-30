import React from "react";
import Banner from "../Banner/Banner";
import ClientReview from "../ClientReview/ClientReview";
import OurGallery from "../OurGallery/OurGallery";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services />
      <OurGallery></OurGallery>
      <ClientReview />
    </div>
  );
};

export default Home;
