import axios from "axios";
import React, { useState, useEffect } from "react";
import {
  Table,
  Button,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
} from "reactstrap";
import Main from "../layout/Main";
function Customer() {
  const [customers, setCustomers] = useState([]);

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  //get all user!
  useEffect(() => {
    axios.get("http://localhost:9000/api/customer").then((res) => {
      setCustomers(res.data.data);
    });
  }, []);

  return (
    <div>
      <Main />
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>CustomerName</th>
            <th>ContactName</th>
            <th>Address</th>
            <th>City</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr>
              <th scope="row">{customer.index}</th>
              <td>{customer.CustomerName}</td>
              <td>{customer.ContactName}</td>
              <td>{customer.Address}</td>
              <td>{customer.City}</td>
              <td>{customer.Country}</td>
              <td>
                <Button
                  color="primary"
                  outline
                  href={`/customer/edit/${customer._id}`}
                >
                  Edit
                </Button>
                <Button color="primary" outline onClick={toggle}>
                  {" "}
                  Delete
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>Delete User</ModalHeader>
                  <ModalBody>are you ok </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Okay
                    </Button>
                  </ModalFooter>
                </Modal>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Customer;
