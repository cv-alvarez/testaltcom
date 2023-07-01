import React from "react";
import BannerSection from "../../BannerSection/BannerSection";
import ScoredProducts from "../../scoredproducts/ScoredProducts";
import styles from "./Homepage.module.css";
import Footer from "../../Footer/Footer";
import Carousel from "../../carousel/Carousel";

const Homepage = () => {
  return (
   <>

    <div className={styles.homepage}>
      <BannerSection />
      <ScoredProducts />
      <Carousel/>
      <Footer/>
    </div>
    </>
  );
};

export default Homepage;
