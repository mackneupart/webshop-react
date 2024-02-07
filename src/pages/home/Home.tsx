import { Fragment, useEffect, useState } from "react";

// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

// Components
import AboutSection from "../../components/AboutSection";
import Footer from "../../components/StandardComponents/Footer";
import CardCarrousel from "../../components/CardCarrousel";
import HeaderImage from "../../components/HeaderImage";
import CatCardContainer from "../../components/OverviewCategoryComponent/CatCardContainer";

export default function Home() {
  const [products, setProducts] = useState([]);

  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    fetch("http://localhost:3000/products/carrousel")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Fragment>
      <main className="content">
        <HeaderImage />
        <CatCardContainer heading="All Categories" />
        <CardCarrousel products={products} heading={"Newly added Duckies"} />
        <AboutSection />
        <Footer />
      </main>
    </Fragment>
  );
}
