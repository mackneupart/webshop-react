import { useState, useEffect, Fragment } from "react";
import "../../styles/styles.css";
import Footer from "../../components/StandardComponents/Footer";
import ProdCardContainer from "../../components/ProdCardContainer";
import { useLocation } from "react-router-dom";

export default function SpecificProducts(props: any) {
  const { updateProductCount } = props;
  const [specificProducts, setSpecificProducts] = useState([]);
  const { state } = useLocation();
  const ocId = state.ocId;
  const subcId = state.subcId;
  const subCatName = state.subCatName;

  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/overcategories/${ocId}/${subcId}`)
      .then((response) => response.json())
      .then((data) => setSpecificProducts(data));
  }, 
  // "specificProducts" is getting the missing dependencies: 'ocId' and 'subcId' from the dropdown navigation
  [specificProducts]);

  return (
    <Fragment>
      <main className="content">
        <ProdCardContainer
          heading={subCatName + " products"}
          products={specificProducts}
          updateProductCount={updateProductCount}
        />
        <Footer />
      </main>
    </Fragment>
  );
}
