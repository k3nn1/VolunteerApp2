import React from "react";
import Hero from "../../components/Hero";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
// import { PromiseProvider } from "mongoose";

const Home = () => (
  <div>
    <Hero backgroundImage="http://volunteercentrewi.org/wp-content/uploads/2017/02/become-a-volunteer.png" alt="Volunteer Hands">

    {/* https://gt20.org/wp-content/uploads/2016/09/volunteer.png */}

      <h1>Spread the Love!</h1>
      <h2>OTHERS ARE IN NEED OF YOUR HELP</h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Welcome to Helping Hands!</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
        <p align="justify">
            Volunteering is an incredibly rewarding way to spend your time while enriching the 
            lives of others. Volunteer service opportunities vary from delivering meals to home-bound 
            seniors, brightening the decor of one of our shelters, or providing childcare to one of 
            the students in our Head Start programs, and much, much more.
          </p>
          <p align="justify">
            Our Volunteers often have such a life changing experience We simply ask that you 
            bring your passion to the volunteer site and allow us to help you help the community!
          </p>
          <p align="justify">
            Please feel free to review the local volunteering opportunities by clicking the city in
            your area under the Opportunity tab. 
          </p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default Home;
