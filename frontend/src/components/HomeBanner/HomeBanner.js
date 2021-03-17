import React from "react";
import BasicButton from "../../components/BasicButton/BasicButton";
import './HomeBanner.css'
import bannerImg from "../../assets/banner-minions.png";

import { scroller } from 'react-scroll';

export default function HomeBanner() {

  function scrollToProducts() {
    scroller.scrollTo('productsSection', {
      duration: 600,
      delay: 0,
      smooth: 'easeInOutBack'
    })
  }

  return (
    <div className="Home_banner">

      <div className="Home_rowContainer">
        <div className="Home_leftContainer">
          <h1 className="Home_bannerTitle">Adote um minion!</h1>
          <h3 className="Home_bannerDesc">Adquira já as criaturas amarelas mais amadas do planeta.</h3>
          <BasicButton
          color="#231F20"
          bgColor="#FCE029"
          to="test1" 
          onClick={() => scrollToProducts()}
          >
            Ver produtos!
          </BasicButton>
        </div>

        <div className="Home_rightContainer">
          <img className="Home_imgBanner" src={bannerImg} alt=""/>
        </div>
        </div>
    </div>
  );
} 