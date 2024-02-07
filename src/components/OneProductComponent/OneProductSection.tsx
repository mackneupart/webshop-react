import { Fragment, useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Link, useParams } from "react-router-dom";
import { CustomerContext } from "../../App";
import "./OneProductSection.css";

interface OneProductSectionProps {
  prodImg: string;
  prodName: string;
  prodPrice: string;
  prodDescription: string;
  updateProductCount: (count: number) => void;
}

export default function OneProductSection({
  prodImg,
  prodName,
  prodPrice,
  prodDescription,
  updateProductCount,
}: OneProductSectionProps) {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("customer context is undefined");
  }
  const { customer } = context;
  const { prodId: routeProdId } = useParams();
  const [itemCount, setItemCount] = useState(1);

  //add product(s) to basket
  async function buyProduct() {
    for (let i = 0; i < itemCount; i++) {
      await fetch(
        `http://localhost:3000/baskets/${customer.customerId}/${routeProdId}`,
        {
          mode: "cors",
          method: "PUT",
        }
      );
    }
    //updates the productCounter in navbar
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
    getBasketCount();

    //displays a toast with success message
    toast.success("You just added the product to your basket!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  }

  //increment the amount of products you want to add to the basket
  function incrementCount() {
    setItemCount(itemCount + 1);
  }
  
  //decrement the amount of products you want to add to the basket
  function decrementCount() {
    if (itemCount > 1) {
      setItemCount(itemCount - 1);
    }
  }

  return (
    <Fragment>
      <section className="content">
        <div className="container px-4 px-lg-5">
          <nav>
            <ol className="breadcrumbs">
              <li className="breadcrumb-item">
                <Link to="/All-products">All products</Link>
              </li>
              <li className="active breadcrumb-item">
              <Link to=''>{prodName}</Link>

              </li>
            </ol>
          </nav>
          <div className="row">
            {/* Product picture */}
            <div className="col-xs-12 col-md-7">
              <div>
                <img
                  className="product-img product-image"
                  id="product-Img"
                  src={"../assets/images/" + prodImg}
                  alt={prodName + " image"}
                />
              </div>
            </div>

            {/* Text box with description, prices and buy button */}
            <div className="col-xs-12 col-md-5 second-box">
              <div className="row">
                <div className="col col-12">
                  <h1 id="productName">{prodName}</h1>
                  <p id="productDescrption">{prodDescription}</p>
                  <h3>
                    {" "}
                    <span>
                      {" "}
                      <span id="productPrice">{prodPrice}</span> DKK
                    </span>
                  </h3>
                </div>
                <div className="col-md-10 col-lg-8">
                  <div className="container text-center">
                    <div className="row justify-content-between align-items-center">
                      <button
                        type="button"
                        className="btn-dark btn col-2"
                        onClick={decrementCount}>
                        -
                      </button>
                      <strong className="quantity col-3">{itemCount}</strong>
                      <button
                        type="button"
                        className="btn-dark btn col-2"
                        onClick={incrementCount}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-md-10 col-lg-8 OneBuyButton">
                  <button
                    id="AddProduct"
                    className="BlackButton btn"
                    type="submit"
                    onClick={buyProduct}>
                    <i className="bi-cart-fill me-1"></i> Buy duck
                    <span className="badge bg-dark text-white ms-1 rounded-pill"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Horizontal line breaker */}
        <div className="col-12 px-4 px-lg-5">
          <br></br>
          <hr></hr>
        </div>
      </section>
      <ToastContainer />
    </Fragment>
  );
}
