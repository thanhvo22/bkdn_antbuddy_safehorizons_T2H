import { Form, FormGroup, Label, Input, Row, Col, Button } from "reactstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Main from "../layout/Main";
import { Redirect } from "react-router-dom";

function EditCustomer({ match }) {
  const [customer, setCustomer] = useState({});
  const [redirect, setRedirect] = useState(false);


  //get one user!
  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/customer/${match.params.id}`)
      .then((res) => {
        setCustomer(res.data.data);
      });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:9000/api/customer/edit/${match.params.id}`, customer)
    .then(res => {
      console.log(res);
      setRedirect(true);
    })
  }
  if (redirect) {
    return <Redirect to="/customer" />;
  }

  function handleChange(evt) {
    const value = evt.target.value;
    setCustomer({
      ...customer,
      [evt.target.name]: value,
    });
    
  }

  return (
    <div>
      <Main />
      <div fill vertical>
        <Form onSubmit={onSubmit} >
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleEmail">CustomerName </Label>
                <Input
                  id="exampleEmail"
                  name="CustomerName"
                  //placeholder={customer.CustomerName}

                  value={customer.CustomerName}
                  onChange={handleChange}
                  //required
                />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="ContactName">ContactName </Label>
                <Input
                  id="ContactName"
                  name="ContactName"
                  value={customer.ContactName}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">Address</Label>
                <Input
                  id="Address"
                  name="Address"
                  value={customer.Address}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">City</Label>
                <Input
                  id="exampleState"
                  value={customer.City}
                  onChange={handleChange}
                  name="City"
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleCity">PostalCode</Label>
                <Input
                  id="exampleCity"
                  value={customer.PostalCode}
                  onChange={handleChange}
                  name="PostalCode"
                />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="exampleState">Country</Label>
                <Input
                  id="exampleState"
                  value={customer.Country}
                  onChange={handleChange}
                  name="Country"
                />
              </FormGroup>
            </Col>
          </Row>
          {/* <FormGroup check>
          <Input id="exampleCheck" name="check" type="checkbox" />
          <Label check for="exampleCheck">
            Check me out
          </Label>
        </FormGroup> */}
          <Button> Save</Button>
        </Form>
      </div>
    </div>
  );
}
export default EditCustomer;
