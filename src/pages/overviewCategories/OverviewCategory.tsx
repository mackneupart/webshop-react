// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

//Import components
import Footer from "../../components/StandardComponents/Footer";
import { Fragment, useEffect } from "react";
import CatCardContainer from "../../components/OverviewCategoryComponent/CatCardContainer";

//export function
export default function OverviewCategory() {
  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <main className="content">
        <CatCardContainer heading="All Categories" />
      </main>
      <Footer />
    </Fragment>
  );
}
