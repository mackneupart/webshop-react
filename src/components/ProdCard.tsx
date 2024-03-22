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
      `https://webshop-rest-api-main-production.up.railway.app/baskets/${customer.customerId}/${prodId}`,
      {
        mode: "cors",
        method: "PUT",
      }
    );
    getBasketCount();
  }
  async function getBasketCount() {
    const response = await fetch(
      `https://webshop-rest-api-main-production.up.railway.app/baskets/${customer.customerId}`,
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
        <Link className="" to={`/Product/${prodId}`}>
          <img
            className="product-card-img"
            src={prodImg}
            alt={prodName + " image"}
          />
        </Link>

        <div className="card-body">
          <div className="text-center">
            <Link to={`/Product/${prodId}`}>
              <h5 className="fw-bolder" id="productName">
                {prodName}
              </h5>
            </Link>
            <span>
              <span id="productPrice">{prodPrice}</span> DKK
            </span>
          </div>
        </div>
        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent align-self-center">
          <div className="text-center custom-inline">
            <img
              src="../../assets/images/add-button.png"
              className="basket-img"
              onClick={buyProduct}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
