import { Fragment } from "react";
import { Link } from "react-router-dom";

interface CarouselProductCardProps {
    prodImg: string;
    prodName: string;
    prodPrice: string;
    prodId: string;
}

export default function CarouselProductCard({
    prodImg,
    prodName,
    prodPrice,
    prodId }:
    CarouselProductCardProps) {
    return (
        <Fragment>
            <div className="card w-100 d-flex flex-column justify-content-center align-items-center "
                style={{ backgroundImage: "linear-gradient(#fff,#F2BD2C, #fff)" }}
                id={prodId}>
                <img className="product-img" src={prodImg} alt={prodName + " image"} />
                <div className="card-body">
                    <div className="text-center">
                        <h5 className="fw-bolder" id="productName">{prodName}</h5>
                        <span>
                            <span id="productPrice">{prodPrice}</span> DKK
                        </span>
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link className="btn BlackButton" to={`/Product/${prodId}`}>
                            See product
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}