import React, { Component } from "react";
import API from "../../utils/API";
import Hero from "../../components/Hero";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
import { Input, Dropdown, FormBtn } from "../../components/Form";
// import SearchResults from "../../components/SearchResults";

class Signup extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
    error: ""
  };

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  }

  handleInputChange = event => {
    this.setState({ signup: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (

      <div>
      <Hero backgroundImage="http://volunteercentrewi.org/wp-content/uploads/2017/02/become-a-volunteer.png" alt="Volunteer Hands">
          {/* alternate link = https://gt20.org/wp-content/uploads/2016/09/volunteer.png */}     
          <h1>Volunteer YOUR TIME and GIVE BACK !</h1>
      </Hero>

      <Container style={{ marginTop: 30 }}>
          <Row>
              <Col size="md-4">
              </Col>
              <Col size="md-4">
              <h1 className="text-center">Sign Up!</h1>
              <br />
              
                <form>
                  <Input
                    value={this.state.firstname}
                    onChange={this.handleChange}
                    name="firstname"
                    placeholder="Firstname (required)"
                  />
                  <Input
                    value={this.state.lastname}
                    onChange={this.handleChange}
                    name="lastname"
                    placeholder="Lastname (required)"
                  />
                  <Input
                    value={this.state.email}
                    onChange={this.handleChange}
                    name="email"
                    placeholder="Email (required)"
                  />
                  <Input
                    value={this.state.phone}
                    onChange={this.handleChange}
                    name="phone"
                    placeholder="Phone (optional)"
                  />
                  <Input
                    value={this.state.city}
                    onChange={this.handleChange}
                    name="city"
                    placeholder="City (optional)"
                  />

                  <FormBtn
                    disabled={!(this.state.firstname && this.state.lastname && this.state.email)}
                    onClick={this.handleFormSubmit}
                  >
                    Sign Up!
                  </FormBtn>
                </form>

          {/* <SignupForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} /> */}

              </Col>
          </Row>
      </Container>
      </div>
    );
  }
}

export default Signup;