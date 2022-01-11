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
//import Main from "../layout/Main";
import Home_admin from "../Home_admin";

function Home_Products() {
  const [orders, setOrders] = useState([]);

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  //get all user!
  useEffect(() => {
    axios.get("http://localhost:9000/api/order").then((res) => {
      setOrders(res.data.data);
      console.log(res);
    });
  }, []);

  const pendingOrder = async () => {
    await axios.get("http://localhost:9000/api/order").then((res) => {
      setOrders(res.data.data.filter(item => item.Status==="pending" ));
      console.log(res);
    });
  }

  const rejectOrder = async () => {
    await axios.get("http://localhost:9000/api/order").then((res) => {
      setOrders(res.data.data.filter(item => item.Status==="reject" ));
      console.log(res);
    });
  }

  const acceptOrder = async () => {
    await axios.get("http://localhost:9000/api/order").then((res) => {
      setOrders(res.data.data.filter(item => item.Status==="accept" ));
      console.log(res);
    });
  }
  return (
    <div>
      <Home_admin />
      
      <div className="container" >
      <Button color="primary" onClick={rejectOrder} >Reject</Button>
      <Button color="info" onClick={acceptOrder} >Accept</Button>
      <Button color="danger" onClick={pendingOrder} >Pending</Button>
      <Table >
        <thead>
          <tr>
            <th>#</th>
            <th>CustomerID Name</th>
            <th>EmployeeID</th>
            <th>Products</th>
            <th>ShipperID</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <th scope="row">{order.index}</th>
              <td>{order.CustomerID ? order.CustomerID.CustomerName : "Eror"}</td>
              <td>
                {order.EmployeeID ? order.EmployeeID.FirstName : "Eror"}
              </td>
              <td>
                {order.Products ? order.Products[0].ProductID.ProductName : "null"}
              </td>
              <td>{order.ShipperID? order.ShipperID.ShipperName : "Null"}</td>
              <td>{order.Status}</td>
              <td>
                <Button
                  color="primary"
                  outline
                  href={`/product/edit/${order._id}`}
                >
                  Edit
                </Button>
                <Button color="danger" outline onClick={toggle}>
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
    </div>
  );
}

export default Home_Products;
