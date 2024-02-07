import { Fragment, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./FilterButtons.css";

export default function ProdCardContainer() {
  const navigate = useNavigate();
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Sends route, ID and catName to subCategory page
  function navigateSpecificProductPage(
    overCatName: string,
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

  function toggleCollapse() {
    setIsCollapsed(!isCollapsed);
  }

  return (
    <Fragment>
      <div
        className={`container px-4 px-lg-5${isCollapsed ? " collapsed" : ""}`}>
        <Container>
          <Row className="mt-2 justify-content-start gap-2 mx-auto">
            <Col xs={6} sm={5} md={3} xl={2}>
              <h5>Categories:</h5>
            </Col>
            <Col xs={6} sm={5} md={true} className="align-self-center">
              <Button
                className="btn"
                variant="secondary"
                onClick={toggleCollapse}>
                {isCollapsed ? "Show" : "Hide"}
              </Button>
            </Col>
          </Row>
        </Container>
        {!isCollapsed && (
          <Container>
            <Row className="FilterButton justify-content-evenly gap-2 mx-auto">
              <Col xs={5} sm={3} xxl={true}><Button className="btn btn-lg" variant="warning" onClick={() =>navigateSpecificProductPage("Rubber-Ducks","Carnival",1,1)}>Carnival</Button></Col>
              <Col xs={5} sm={3} xxl={true}><Button className="btn btn-lg" variant="warning" onClick={() =>navigateSpecificProductPage("Rubber-Ducks","Professions",1,2)}>Professions</Button></Col>
              <Col xs={5} sm={3} xxl={true}><Button className="btn btn-lg" variant="warning" onClick={() =>navigateSpecificProductPage("Rubber-Ducks","Alternative",1,3)}>Alternative</Button></Col>
              <Col xs={5} sm={3} xxl={true}><Button className="btn btn-lg" variant="warning" onClick={() =>navigateSpecificProductPage("Accessories", "Bags", 2, 4)}>Bags</Button></Col>
              <Col xs={5} sm={3} xxl={true}><Button className="btn btn-lg" variant="warning" onClick={() =>navigateSpecificProductPage("Accessories", "Jewlery", 2, 5)}>Jewlery</Button></Col>
              <Col xs={5} sm={3} xxl={true}><Button className="btn btn-lg" variant="warning" onClick={() =>navigateSpecificProductPage("Accessories", "Keyrings", 2, 6)}>Keyrings</Button></Col>
              <Col xs={5} sm={3} xxl={true}><Button className="btn btn-lg" variant="warning" onClick={() =>navigateSpecificProductPage("Clothes", "Hats", 3, 7)}>Hats</Button></Col>
              <Col xs={5} sm={3} xxl={true}><Button className="btn btn-lg" variant="warning" onClick={() =>navigateSpecificProductPage("Clothes", "Socks", 3, 8)}>Socks</Button></Col>
              <Col xs={5} sm={3} xxl={true}><Button className="btn btn-lg" variant="warning" onClick={() =>navigateSpecificProductPage("Clothes", "Ties", 3, 9)}>Ties</Button></Col>
            </Row>
          </Container>
        )}
      </div>
    </Fragment>
  );
}
