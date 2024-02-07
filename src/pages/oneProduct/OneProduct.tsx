import { Fragment, useEffect, useState } from "react";

//CSS
import "../../styles/styles.css";

// Components
import Footer from "../../components/StandardComponents/Footer";
import OneProductSection from "../../components/OneProductComponent/OneProductSection";
import { useParams } from "react-router-dom";

interface ProductInterface {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  imgSrc: string;
}

export default function OneProduct(props: any) {
  const [product, setProducts] = useState<ProductInterface | null>(null);
  const { prodId: routeProdId } = useParams();
  const { updateProductCount } = props;

  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3000/products/${routeProdId}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Fragment>
      <main className="content">
        {product && (
          <OneProductSection
            prodImg={product.imgSrc}
            prodName={product.productName}
            prodPrice={product.productPrice.toString()}
            prodDescription={product.productDescription}
            updateProductCount={updateProductCount}
          />
        )}
        <Footer />
      </main>
    </Fragment>
  );
}
