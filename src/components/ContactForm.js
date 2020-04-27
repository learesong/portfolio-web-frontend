import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Axios from 'axios';

import Content from "../components/Content";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      disable: false,
      emailSent: null
    };
  }

  handleChange = (event) => {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    console.log(event);
    event.preventDefault(); 
    this.setState({
        disabled: true, 
    });

    Axios.post('http://localhost:8080/email', this.state)
    .then(res => {
        this.setState({
          disabled: false,
          emailSent: true
        });
    })
    .catch(err => {
      this.setState({
        disabled: false,
        emailSent: false
      })
    })
  }

  render() {
    return (
      <Content>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label htmlFor="full-name">Your Name</Form.Label>
            <Form.Control
              id="full-name"
              name="name"
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
              id="email"
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor="message">Message</Form.Label>
            <Form.Control
              id="message"
              name="message"
              as="textarea"
              row="3"
              value={this.state.message}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Button className="d-inline-block" variant="primary" type="submit" disabled={this.state.disabled}>
            Send
          </Button>

          {this.state.emailSent === true && <p className="d-inline success-msg"> Sent :)</p>}
          {this.state.emailSent === false && <p className="d-inline err-msg">Email wasn't sent :( Please fill out all the sections if you haven't done so</p>}
        </Form> 
      </Content>
    );
  }
}
export default ContactForm;
