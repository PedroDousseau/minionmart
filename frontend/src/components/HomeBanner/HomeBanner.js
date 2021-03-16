import React from "react";
import BasicButton from "../../components/BasicButton/BasicButton";
import './HomeBanner.css'
import bannerImg from "../../assets/banner-minions.png";

export default function HomeBanner() {
  return (
    <div className="Home_banner">

      <div className="Home_rowContainer">
        <div className="Home_leftContainer">
          <h1 className="Home_bannerTitle">Adote um minion!</h1>
          <h3 className="Home_bannerDesc">Adquira já as criaturas amarelas mais amadas do planeta.</h3>
          <BasicButton
          color="#231F20"
          bgColor="#FCE029"
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