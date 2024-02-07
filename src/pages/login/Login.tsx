import { Fragment, useEffect } from "react";

// CSS import
import "../../styles/styles.css";

// Components
import LoginForm from "../../components/LoginComponent/LoginForm";
import Footer from "../../components/StandardComponents/Footer";

export default function Login() {
  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <main className="content">
        <LoginForm />
        <Footer />
      </main>
    </Fragment>
  );
}
