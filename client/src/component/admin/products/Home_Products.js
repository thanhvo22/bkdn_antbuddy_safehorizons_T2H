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
  const [products, setProducts] = useState([]);

  // Modal open state
  const [modal, setModal] = React.useState(false);

  // Toggle for Modal
  const toggle = () => setModal(!modal);
  //get all user!
  useEffect(() => {
    axios.get("http://localhost:9000/api/product").then((res) => {
      setProducts(res.data.data);
      console.log(res);
    });
  }, []);
  return (
    <div>
      <Home_admin />
      
      <div className="container" >
      <Button color="success" size="lg" href={`/admin/products/create`}>+ Product</Button>
      <Table >
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>SupplierID</th>
            <th>CategoryName</th>
            <th>Unit</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <th scope="row">{product.index}</th>
              <td>{product.ProductName}</td>
              <td>
                {product.SupplierID ? product.SupplierID.ContactName : "NULL"}
              </td>
              <td>
                {product.CategoryID ? product.CategoryID.CategoryName : "null"}
              </td>
              <td>{product.Unit}</td>
              <td>{product.Price} $</td>
              <td>
                <Button
                  color="primary"
                  outline
                  href={`/product/edit/${product._id}`}
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
