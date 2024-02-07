import { Fragment, useEffect, useState } from "react";
import SubCatCard from "./SubCatCard";

interface SubCatCardContainerProps {
  heading: string;
  ocId: number;
}
export default function SubCatCardContainer({
  heading,
  ocId,
}: SubCatCardContainerProps) {
  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/categories/overcategories/${ocId}`)
      .then((response) => response.json())
      .then((data) => {
        const { subCategories: receivedSubCategories, overCategoryName } = data;
        const updatedSubCategories = receivedSubCategories.map(
          (subCategory: any) => ({
            ...subCategory,
            overCategoryName: overCategoryName,
          })
        );
        setSubCategories(updatedSubCategories);
      });
  }, []);
  return (
    <Fragment>
      <section className="py-5">
        <h2 className="text-center">{heading}</h2>
        <div className="container px-4 px-lg-5">
          <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3">
            {subCategories.map((subCategory: any) => (
              <SubCatCard
                overCatName={heading}
                subCatName={`${subCategory.subCategoryName}`}
                ocId={ocId}
                subcId={subCategory.subcId}
                catImg={"/assets/images/" + subCategory.imgSrc}
                priceRange={subCategory.priceRange + " DKK"}
                key={subCategory.subcId}
              />
            ))}
          </div>
        </div>
      </section>
    </Fragment>
  );
}
