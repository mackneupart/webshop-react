import { Fragment } from "react";
import { ProductProperties } from "../pages/overviewProducts/OverviewProducts";
import ProdCard from "./ProdCard";

interface ProdCardContainerProps {
  heading: string;
  products: ProductProperties[];
  updateProductCount: (count: number) => void;
}

export default function ProdCardContainer({
  heading,
  products,
  updateProductCount,
}: ProdCardContainerProps) {
  return (
    <Fragment>
      <section className="py-5">
        <div className="container px-4 px-lg-5">
          <h2 className="text-center">{heading}</h2>
          <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4">
            {products.map((product: ProductProperties) => (
              <div
                className="col"
                id={product.productId}
                key={product.productId}>
                <ProdCard
                  prodImg={"/assets/images/" + product.imgSrc}
                  prodName={product.productName}
                  prodPrice={product.productPrice}
                  prodId={product.productId}
                  updateProductCount={updateProductCount}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
