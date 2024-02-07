import { useState, useEffect, Fragment } from "react";
import "../../styles/styles.css";
import "../../styles/overviewProducts.css";
import Footer from "../../components/StandardComponents/Footer";
import ProdCardContainer from "../../components/ProdCardContainer";
import FilterButtons from "../../components/FilterComponent/FilterButtons";

export interface ProductProperties {
  imgSrc: string;
  productName: string;
  productPrice: string;
  productId: string;
  productDescription: string;
}

export default function OverviewProducts(props: any) {
  const [products, setProducts] = useState<ProductProperties[]>([]);
  const { updateProductCount } = props;

  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Fragment>
      <FilterButtons />
      <ProdCardContainer
        heading="All Products"
        products={products}
        updateProductCount={updateProductCount}
      />
      <Footer />
    </Fragment>
  );
}
