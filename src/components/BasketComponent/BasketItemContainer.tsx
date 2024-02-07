import { Fragment, useContext, useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BasketItem from "./BasketItem";

// CSS
import "./Basket.css";
import { CustomerContext } from "../../App";

interface BasketItemContainerProps {
  customerName: String;
  basketAmount: number;
  updateProductCount: (count: number) => void;
}
interface Product {
  productName: string;
  productPrice: number;
  imgSrc: string;
  productId: number;
}

export default function BasketItemContainer({
  customerName,
  basketAmount,
  updateProductCount,
}: BasketItemContainerProps) {
  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("customer context is undefined");
  }

  const { customer } = context;
  const [itemCount, setItemCount] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTotalAmount(sumPrices());
    getBasketCount();
  },[sumPrices, getBasketCount]);

  //Helper function to update the count in Navbar
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
    setItemCount(data.length);
  }

  //puts a product in the basket, and increment itemCount
  async function buyProduct(prodId: number) {
    await fetch(
      `http://localhost:3000/baskets/${customer.customerId}/${prodId}`,
      {
        mode: "cors",
        method: "PUT",
      }
    );
    getBasketCount();
  }

  //removes a product from basket, and decrement itemCount
  async function removeProduct(prodId: number) {
    await fetch(
      `http://localhost:3000/baskets/${customer.customerId}/${prodId}`,
      {
        mode: "cors",
        method: "DELETE",
      }
    );
    getBasketCount();
  }
  
  //Sums up all the productPrices
  function sumPrices(): number {
    const total = products.reduce(
      (acc, product) => acc + product.productPrice,
      0
    );
    return total;
  }

  async function buyAll() {
    if (itemCount > 0) {
      try {
        // deletes the data for the Guest account
        await fetch(`http://localhost:3000/baskets/${customer.customerId}`, {
          method: "DELETE",
        });
      } catch (error) {
        console.error("Error deleting basket data:", error);
      }
      getBasketCount();
      toast.success("You just bought all your products in the basket", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    } else {
      toast.error("You have no products in the basket", {
        position: "bottom-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
      });
    }
  }

  //fetches the products from API
  useEffect(() => {
    fetch(`http://localhost:3000/baskets/${customer.customerId}`)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [itemCount]);

  let outputName = "";
  if (customerName === "") {
    outputName = `${customer.firstName}'s basket`;
  } else {
    outputName = `${customerName}'s basket`;
  }

  // Count the number of each product in the basket
  const productCount = products.reduce((acc: any, product: Product) => {
    if (acc[product.productId]) {
      acc[product.productId]++;
    } else {
      acc[product.productId] = 1;
    }
    return acc;
  }, {});

  return (
    <Fragment>
      <div className="row cart-box">
        <div className="col-xl-6 order-xs-10 mb-4">
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <span className="text-muted">{outputName}</span>
          </h4>
          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between cart-title-header ">
              <span>Product</span>
              <span>Price</span>
            </li>
            {Object.keys(productCount).map((productId) => {
              const product = products.find(
                (p) => p.productId === parseInt(productId)
              );
              const productsWithSameId = products.filter(
                (p) => p.productId === parseInt(productId)
              );
              const count = productsWithSameId.length;
              return product ? (
                <BasketItem
                  key={productId}
                  prodName={product.productName}
                  prodAmount={count}
                  prodPrice={product.productPrice}
                  prodImg={`./assets/images${product.imgSrc}`}
                  prodId={product.productId}
                  buyProduct={buyProduct}
                  removeProduct={removeProduct}
                />
              ) : (
                <div>Error: No items in the basket</div>
              );
            })}

            {/* Inserting items of products in the below div */}
            <div id="product-update-script"></div>
            <li className="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong id="totalAmount">{totalAmount} DKK</strong>
            </li>
            <li className="buy-li">
              <button
                className="buy-btn btn BlackButton"
                onClick={() => buyAll()}>
                Buy
              </button>
            </li>
          </ul>
          <ToastContainer />
        </div>
      </div>
    </Fragment>
  );
}
