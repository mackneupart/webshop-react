import { Fragment, useEffect } from "react";

// CSS import
import "../../styles/index.css";
import "../../styles/styles.css";

// Components
import BasketItemContainer from "../../components/BasketComponent/BasketItemContainer";
import Footer from "../../components/StandardComponents/Footer";

interface BasketProps {
  updateProductCount: (count: number) => void;
}
export default function Basket(props: BasketProps) {
  const { updateProductCount } = props;
  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Fragment>
      <main className="content">
        <BasketItemContainer
          customerName={""}
          basketAmount={0}
          updateProductCount={updateProductCount}
        />
      </main>
      <Footer />
    </Fragment>
  );
}
