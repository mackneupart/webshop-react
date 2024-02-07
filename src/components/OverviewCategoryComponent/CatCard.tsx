import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

interface CatCardProps {
  catName: string;
  ocId: number;
  priceRange: string;
  catImg: string;
}

export default function CatCard({
  catName,
  ocId,
  catImg,
  priceRange,
}: CatCardProps) {
  // Sends route, ID and catName to subCategory page
  const navigate = useNavigate();
  function navigateSubCatPage(overCatName: String, ocId: number) {
    // Removes the space from the overCategory name:
    const formattedCatName = overCatName.replace(/ /g, "-");
    navigate(`/Categories/${formattedCatName}`, {
      state: { ocId: ocId, overCatName: overCatName },
    });
  }

  return (
    <Fragment>
      <div className="col">
        <div className="card">
          {/* Product image */}
          <img className="product-img" src={catImg} alt={catName + " image"} />
          {/* Product details */}
          <div className="card-body">
            <div className="text-center">
              {/* Product name */}
              <h5 className="fw-bolder">{catName}</h5>
              {/* Product price */}
              {priceRange}
            </div>
          </div>
          {/* Product actions */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="BlackButton btn mt-auto"
                onClick={() => navigateSubCatPage(catName, ocId)}>
                See category
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
