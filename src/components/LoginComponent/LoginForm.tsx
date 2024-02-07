import React, { Fragment, useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Customer, CustomerContext } from "../../App";

// CSS imports
import "./LoginForm.css";

export default function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  const context = useContext(CustomerContext);
  if (!context) {
    throw new Error("customer context is undefined");
  }
  const { updateCustomer } = context;
  useEffect(() => {
    async function fetchCustomers() {
      const response = await fetch("http://localhost:3000/customers", {
        mode: "cors",
        method: "GET",
      });
      const data = await response.json();
      setCustomers(data);
    }

    fetchCustomers();
  }, []);
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const customerExists = customers.find((customer: Customer) => {
      return customer.email === userEmail && customer.password === password;
    });

    if (customerExists !== undefined) {
      updateCustomer(customerExists);
      setUserEmail("");
      setPassword("");
      navigate("/");
    } else {
      alert("email and password does not exist");
    }
  };
  return (
    <Fragment>
      <section className="form-section">
        <section className="login-section">
          <form action="" onSubmit={handleFormSubmit}>
            <img
              src="assets/images/form-duck.svg"
              alt="Form duck logo"
              width="72px"
            />
            <h1>Welcome, login here!</h1>
            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                value={userEmail}
                onChange={(event) => setUserEmail(event.target.value)}
                placeholder="email"
                required
              />
              <label htmlFor="name">Enter email:</label>
            </div>
            <div className="form-floating">
              <input
                type="password"
                className="form-control"
                name="password"
                id="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                placeholder="password"
                required
              />
              <label htmlFor="password">Enter password:</label>
            </div>

            <button type="submit" className="BlackButton btn">
              Login
            </button>
          </form>
          <div className="signup-text">
            Don't have an account yet?
            <Link className="signup-link" to="/signup">
              Signup
            </Link>
          </div>
        </section>
      </section>
    </Fragment>
  );
}
