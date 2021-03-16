import React from "react";
import './Home.css'
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import ProductsSection from "../../components/ProductsSection/ProductsSection";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <ProductsSection/>
    </div>
  );
} 