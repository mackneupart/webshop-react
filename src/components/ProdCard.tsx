import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import { CustomerContext } from "../App";

interface ProdCardProps {
  prodImg: string;
  prodName: string;
  prodPrice: string;
  prodId: string;
  updateProductCount: (count: number) => void;
}

export default function ProdCard({
  prodImg,
  prodName,
  prodPrice,
  prodId,
  updateProductCount,
}: ProdCardProps) {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("customer context is undefined");
  }
  const { customer } = context;

  async function buyProduct() {
    await fetch(
      `http://localhost:3000/baskets/${customer.customerId}/${prodId}`,
      {
        mode: "cors",
        method: "PUT",
      }
    );
    getBasketCount();
  }
  async function getBasketCount() {
    const response = await fetch(
      `http://localhost:3000/baskets/${customer.customerId}`,
      {
        mode: "cors",
        method: "GET",
      }
    );
    const data = await response.json();

    updateProductCount(data.length);
  }

  return (
    <Fragment>
      <div className="card" id={prodId}>
        <img className="product-card-img" src={prodImg} alt={prodName + " image"} />
        <div className="card-body">
          <div className="text-center">
            <h5 className="fw-bolder" id="productName">
              {prodName}
            </h5>
            <span>
              <span id="productPrice">{prodPrice}</span> DKK
            </span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent align-self-center">
        <div className="text-center custom-inline">
            <button
              id="AddProduct"
              className="btn YellowButton"
              type="submit"
              onClick={buyProduct}>
              <i className=""></i> Buy now
            </button>
            <Link className="btn BlackButton" to={`/Product/${prodId}`}>
              See product
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
