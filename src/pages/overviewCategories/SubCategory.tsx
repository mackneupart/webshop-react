// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

//Import components
import ProdCardContainer from "../../components/ProdCardContainer";
import Footer from "../../components/StandardComponents/Footer";
import { Fragment, useEffect } from "react";
import SubCatCardContainer from "../../components/SubCategoryComponent/SubCatCardContainer";
import { useLocation } from "react-router-dom";

//export function
export default function SubCategory(props: any) {
  const { updateProductCount } = props;
  // Getting overCategoryName and its ID from the overviewCategory page
  const { state } = useLocation();
  const ocId = state.ocId;
  const overCatName = state.overCatName;
  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <main className="content">
        <SubCatCardContainer heading={overCatName} ocId={ocId} />
        <ProdCardContainer
          heading=""
          products={[]}
          updateProductCount={updateProductCount}
        />
        <Footer />
      </main>
    </Fragment>
  );
}
