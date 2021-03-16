import React from "react";
import './Home.css'
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import ProductsSection from "../../components/ProductsSection/ProductsSection";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <ProductsSection/>
      <Footer/>
    </div>
  );
} 