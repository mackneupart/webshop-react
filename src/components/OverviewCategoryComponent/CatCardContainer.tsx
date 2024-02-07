// Components
import { Fragment, useEffect, useState } from 'react';
import CatCard from './CatCard';

interface CatCardContainerProps {
    heading: String;
}

export default function CatCardContainer({ heading }: CatCardContainerProps) {
    // Fetch API data for overcategories
    const [overviewCategories, setoverviewCategories] = useState([]);
    useEffect(() => {
      fetch("http://localhost:3000/categories/overcategories")
        .then((response) => response.json())
        .then((data) => setoverviewCategories(data));
    }, []);

    return (
        <Fragment>
            <section className="py-5">
                <h2 className="category-heading text-center">{heading}</h2>
                <div className="container px-4 px-lg-5">
                    <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3">
                        {overviewCategories.map((overviewCategories:any) => (
                            <CatCard
                            catName={overviewCategories.overCategoryName}
                            ocId={overviewCategories.ocId}
                            catImg={"/assets/images/" + overviewCategories.imgSrc}
                            priceRange={overviewCategories.priceRange + " DKK"}
                            key={overviewCategories.ocId}
                        />
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}