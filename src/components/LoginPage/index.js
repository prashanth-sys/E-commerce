import { Component } from "react";
import "./index.css";

class LoginPage extends Component {
  // Define initial state
  state = { userName: "", email: "", number: "", errorMsg: false };

  // Event handler for input changes
  onChangeName = (event) => {
    this.setState({ userName: event.target.value });
  };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangeNumber = (event) => {
    this.setState({ number: event.target.value });
  };

  // Event handler for form submission
  onSubmitForm = (event) => {
    event.preventDefault();
    const { userName, email, number } = this.state;
    // Check if any field is empty
    if (userName === "" || email === "" || number === "") {
      // If any field is empty, set errorMsg to true
      this.setState({ errorMsg: true });
    } else {
      // If all fields are filled, navigate to the home page
      this.props.history.replace("/");
    }
  };

  render() {
    // Destructure state variables
    const { userName, email, number, errorMsg } = this.state;
    return (
      <div className="login-container">
        <div className="card-container">
          {/* Image for login */}
          <img
            src="https://res.cloudinary.com/dlsuy2qn2/image/upload/v1709900553/improve-your-ecommerce-website-design-1_ybhewq.jpg"
            alt="login"
            className="login"
          />
          {/* Form for login */}
          <form className="form-container" onSubmit={this.onSubmitForm}>
            {/* Heading for login */}
            <h1 className="login-heading">Login To Required Fields</h1>

            {/* Input field for username */}
            <label className="label" htmlFor="username">
              USERNAME
            </label>
            <input
              type="text"
              className="input"
              id="username"
              value={userName}
              placeholder="Please Enter Your Name"
              onChange={this.onChangeName}
            />

            {/* Input field for email */}
            <label className="label" htmlFor="email">
              EMAIL ID
            </label>
            <input
              type="text"
              className="input"
              id="email"
              value={email}
              placeholder="Please Enter Email ID"
              onChange={this.onChangeEmail}
            />

            {/* Input field for phone number */}
            <label className="label" htmlFor="number">
              PHONE NUMBER
            </label>
            <input
              type="password"
              className="input"
              id="number"
              value={number}
              placeholder="Please Enter Phone Number"
              onChange={this.onChangeNumber}
            />

            {/* Submit button for the form */}
            <button className="login-button" type="submit">
              Login
            </button>

            {/* Error message if any field is empty */}
            {errorMsg ? (
              <p className="error-msg">*Please Enter Required Field</p>
            ) : null}
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
