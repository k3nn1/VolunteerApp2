import React, { Component } from "react";
import API from "../../utils/API";
import Hero from "../../components/Hero";
import Col from "../../components/Col";
import Row from "../../components/Row";
import Container from "../../components/Container";
import { Input, FormBtn } from "../../components/Form";
import Search from "../../components/SearchForm";
import SearchResults from "../../components/SearchResults";
import { List, ListItem } from "../../components/List";

class Opportunity extends Component {

    state = {
        opps: [],
        organization: '',
        coordinator: '',
        email: '',
        phone: '',
        location: '',
        description: '',
        link: ''
      }

  componentDidMount() {
    this.loadOpps();
  }

  loadOpps = () => {
    API.getOpps()
      .then(res =>
        this.setState({ opps: res.data, organization: "", coordinator: "", email: "", phone: "", location: "", description: "", link: "" })
      )
      .catch(err => console.log(err));
  };

handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
    console.log('Change')
    console.log(this.state)
}

handleSubmit = (event) => {
    // alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
    console.log(this.value);
}

  handleFormSubmit = (event) => {
    event.preventDefault();
    // --------------------------------------------------------<
    // if (this.state.opportunity && this.state.city) {
      API.getOpps({
        title: this.state.organization,
        coordinator: this.state.coordinator,
        email: this.state.email,
        phone: this.state.phone,
        location: this.state.location,
        description: this.state.description,
        link: this.state.link
      })
        .then(res => this.loadOpps())
        .catch(err => console.log(err));
    // }
  };

render() {
    return (

        <div>
            <Hero backgroundImage="http://volunteercentrewi.org/wp-content/uploads/2017/02/become-a-volunteer.png" alt="Volunteer Hands">
                {/* alternate link = https://gt20.org/wp-content/uploads/2016/09/volunteer.png */}     
                <h1>Volunteer YOUR TIME and GIVE BACK !</h1>
            </Hero>

            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-2"></Col>

                    <Col size="md-6" className="text-center">
                    <h1>So Many Opportunities...</h1>
                    <br />

                        <form className="form-inline">
                            <div className="form-group" onSubmit={this.handleSubmit}>       

                                <h6><label>Opportunity:{'\u00A0'}{'\u00A0'}</label></h6>

                                <select name="opportunity" value={this.state.opportunity} onChange={this.handleChange}>
                                    <option value="All">All</option>
                                    <option value="clerical">Clerical</option>
                                    <option value="fosterGrandparent">Foster Grandparent</option>
                                    <option value="general">General</option>
                                    <option value="handyman">Handyman</option>
                                    <option value="foodBank">Food Bank</option>
                                    <option value="mealDelivery">Meal Delivery</option>
                                    <option value="caregiverAssistance">Caregiver Assistance</option>
                                    <option value="landscaping">Landscaping</option>
                                </select>
                                
                            </div>
                            {'\u00A0'}
                            {'\u00A0'}
                            {'\u00A0'}
                            {'\u00A0'}
                            <div className="form-group" onSubmit={this.handleSubmit}>

                                <h6><label>City:{'\u00A0'}{'\u00A0'}</label></h6>

                                <select name="city" value={this.state.city} onChange={this.handleChange}>
                                    <option value="All">All</option>
                                    <option value="coloradoSprings">Colorado Springs</option>
                                    <option value="denver">Denver</option>
                                    <option value="fortCollins">Fort Collins</option>
                                    <option value="grandJunction">Grand Junction</option>
                                </select>
                            </div>
                            {'\u00A0'}
                            {'\u00A0'}
                            {'\u00A0'}
                            {'\u00A0'}
                            <div className="form-group" onSubmit={this.handleSubmit}>

                                <h6><label htmlFor="date">Date:{'\u00A0'}{'\u00A0'}</label></h6>
                                <input name ="date" type="date" required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}" value={this.state.date} onChange={this.handleChange} />
                                <span className="validity"></span>
                            
                            </div>
                            <br /><br /><br />
                        </form>

                        <FormBtn
                            onClick={this.handleFormSubmit}>
                            Submit
                        </FormBtn>
        
                    </Col>
                </Row>
                {/* ------------------------------------------------------< */}
                <Row>
                    {this.state.opps.length ? (
                    <List>
                        {this.state.opps.map(data => (
                        <ListItem key = {data._id}>
                            <a href={data.link}>
                            <strong>
                                {data.organization} : {data.description}
                            </strong>
                            </a>
                        </ListItem>
                        ))}
                    </List>
                    ) : (
                    <h4>No Results to Display</h4>
                    )}
                </Row>
                {/* -------------------------------------------------------------> */}
            </Container>
        </div>
    );
  }
}


export default Opportunity;



