import { Fragment } from "react";

export default function HeaderImage() {
  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight, // Adjust as needed for scrolling distance
      behavior: "smooth", // Smooth scrolling animation
    });
  };
  return (
    <Fragment>
      <header>
        <img
          className="header-img"
          height={1397}
          width={2800}
          src="assets/images/RB_coverImage.webp"
          alt="Five ducks in a row"></img>
        <img
          src="assets/images/arrow.png"
          onClick={handleScrollDown}
          className="scroll-down"
        />
      </header>
    </Fragment>
  );
}
