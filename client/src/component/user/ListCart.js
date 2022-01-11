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
import Main from "../layout/Main";

function ListCart() {
  const [products, setProducts] = useState([]);
  
  const [cart, setCart] = useState(() => {
    const test1 = localStorage.getItem("cart");
    const test2 = JSON.parse(test1);
    return test2;
  });

  const checkOut = async () => {
    console.log({
      CustomerID: localStorage.getItem('id'),
      Total: cart.reduce((prev, current) => {
        return prev + current.item.Price * current.quantity
      },0),
      Products: cart.map(item => {
        return {
          ProductID: item.item._id,
          Quantity: item.quantity
        }
      })
    });
    await axios.post("http://localhost:9000/api/order/create", {
      CustomerID: localStorage.getItem('id'),
      Total: cart.reduce((prev, current) => {
        return prev + current.item.Price * current.quantity
      },0),
      Products: cart.map(item => {
        return {
          ProductID: item.item._id,
          Quantity: item.quantity
        }
      })
    }).then(res => {
      localStorage.setItem('cart', JSON.stringify([]));
    })
  }

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  //get all user!

  return (
    <div>
      <Main />

      <div className="container">
        <Button color="success" size="lg" href={`/product`}>
          + Product
        </Button>
        <Table>
          <thead>
            <tr>
              
              <th>Product Name</th>
              <th>quantity</th>
              
              <th>Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr>
                
                <td>{item.item.ProductName}</td>
                <td>{item.quantity}</td>
               
                <td>{item.item.Price} $</td>
                
              </tr>
            ))}
          </tbody>
          <h5>ToTal: {cart.reduce((prev, current) => {
            return prev + current.item.Price * current.quantity
          },0)} $</h5>
          <Button onClick={checkOut} href={`/`}>CheckOut</Button>
        </Table>
      </div>
    </div>
  );
}

export default ListCart;
