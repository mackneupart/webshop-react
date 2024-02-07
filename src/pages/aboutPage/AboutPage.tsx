import { Fragment, useEffect } from "react";

// CSS import
import "../../styles/styles.css";

// Components
import Footer from "../../components/StandardComponents/Footer";
import AboutPageSection from "../../components/AboutPageSection";

export default function AboutDuck() {
  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <main className="content">
        <AboutPageSection />
        <Footer />
      </main>
    </Fragment>
  );
}
