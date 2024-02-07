import { Fragment } from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Footer() {
  return (
    <Fragment>
      <Navbar className="footer" expand="lg">
        <Container className="d-flex justify-content-center">
          <Navbar.Brand>© 2023 Copyright: Ducktastic.dk</Navbar.Brand>
        </Container>
      </Navbar>
    </Fragment>
  );
}
