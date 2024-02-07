import { Fragment, useEffect } from "react";
import React, { useState } from "react";
import "./signup.css";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/StandardComponents/Footer";

export default function Signup() {
  interface CustomerValuesInterface {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const [CustomerValues, setCustomerValues] = useState<CustomerValuesInterface>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  //Scrolls to the top of the page, on first render
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //Post a customer to the database
  const postCustomer = async (customer: string) => {
    try {
      const response = await fetch("http://localhost:3000/customers", {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: customer,
      });

      if (!response.ok) {
        alert("You have not been signed up. Please try again later");
        throw new Error("Failed to post customer data");
      }
    } catch (error) {
      throw new Error("error: " + error);
    }
  };

  //Updataing the state of current e.target
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setCustomerValues({ ...CustomerValues, [name]: value });
  };

  //Sign up method for a new customer
  const handleSignup = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Getting the form data
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const password = formData.get("password") as string;
    const email = formData.get("email") as string;

   //Regular expressions for validation
    const regEmail: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const regName: RegExp = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,20}$/;
    const regPassword: RegExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    //validation of input fields with regex
    if (!regName.test(firstName)) {
      alert("Please enter a valid first name");
      return;
    }
    if (!regName.test(lastName)) {
      alert("Please enter a valid last name");
      return;
    }
    if (!regEmail.test(email)) {
      alert("Please enter valid email address");
      return;
    }
    if (!regPassword.test(password)) {
      alert("Please enter a valid password. Your password must contain at least 1 capital letter, 1 number and the length of 8 characters");
      return;
    }
    // Valid form date, which creates a customer object
    const CustomerValues = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const customerJSON = JSON.stringify(CustomerValues);
    postCustomer(customerJSON);

    // Reset form values after submission
    e.currentTarget.reset();

    // Navigate to the login page
    navigate("/Login");
    //reload page, to be able to login directly
    window.location.reload();
  };

  return (
    <Fragment>
      <main className="content">
        <section className="form-section">
          <section className="login-section">
            <form onSubmit={handleSignup}>
              <div>
                <img
                  src="assets/images/form-duck.svg"
                  width="72px"
                  alt="404 sad duck"
                />
                <h1>Become a member!</h1>{" "}
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={CustomerValues.firstName}
                  onChange={handleInputChange}
                  placeholder="fname"
                />
                <label htmlFor="firstName">Name:</label>
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={CustomerValues.lastName}
                  onChange={handleInputChange}
                  placeholder="lname"
                />
                <label htmlFor="lastName">Lastname:</label>
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={CustomerValues.email}
                  onChange={handleInputChange}
                  placeholder="email"
                />
                <label htmlFor="email">Email:</label>
              </div>
              <div className="form-floating">
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  value={CustomerValues.password}
                  onChange={handleInputChange}
                  placeholder="password"
                />
                <label htmlFor="password">Password:</label>
              </div>
              <button type="submit" className="BlackButton btn">
                Signup
              </button>
            </form>
          </section>
        </section>
        <Footer />
      </main>
    </Fragment>
  );
}
