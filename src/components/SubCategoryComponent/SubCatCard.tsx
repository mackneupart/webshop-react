import { Fragment } from "react";
import { useNavigate } from "react-router-dom";

interface SubCatCardProps {
  subCatName: string;
  overCatName: string;
  ocId: number;
  subcId: number;
  priceRange: string;
  catImg: string;
}

export default function SubCatCard({
  overCatName,
  subCatName,
  ocId,
  subcId,
  catImg,
  priceRange,
}: SubCatCardProps) {
  // Sends route, ID and catName to subCategory page
  const navigate = useNavigate();
  function navigateSpecificProductPage(
    overCatName: String,
    subCatName: string,
    ocId: number,
    subcId: number
  ) {
    // Removes the space from the overCategory name:
    const formattedOverCatName = overCatName.replace(/ /g, "-");
    const formattedSubCatName = subCatName.replace(/ /g, "-");
    navigate(`/Categories/${formattedOverCatName}/${formattedSubCatName}`, {
      state: { ocId: ocId, subcId: subcId, subCatName: subCatName },
    });
  }

  return (
    <Fragment>
      <div className="col">
        <div className="card">
          {/* Product image */}
          <img className="product-img" src={catImg} alt="Category" />
          {/* Product details */}
          <div className="card-body">
            <div className="text-center">
              {/* Product name */}
              <h5 className="fw-bolder">{subCatName}</h5>
              {/* Product price */}
              {priceRange}
            </div>
          </div>
          {/* Product actions */}
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button
                className="BlackButton btn mt-auto"
                onClick={() =>
                  navigateSpecificProductPage(
                    overCatName,
                    subCatName,
                    ocId,
                    subcId
                  )
                }>
                See products
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
