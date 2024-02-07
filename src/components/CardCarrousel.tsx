//import
import Carousel from "react-bootstrap/Carousel";

//Components import
import { Fragment } from "react";
import CarouselProductCard from "./CarouselProductCard";

interface CardCarrouselProps {
  heading: string;
  products: never[];
}

export default function CardCarousel({
  products,
  heading,
}: CardCarrouselProps) {
  return (
    <Fragment>
      <h2 className="text-center">{heading}</h2>
      <Carousel variant="dark">
        {products.map((product: any) => (
          <Carousel.Item key={product.productId}>
            <CarouselProductCard
              prodImg={"./assets/images/" + product.imgSrc}
              prodName={product.productName}
              prodPrice={product.productPrice + " DKK"}
              prodId={product.productId}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Fragment>
  );
}
