import { Table, Modal, Button, Input } from "reactstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import Main from "../layout/Main";
import { Redirect } from "react-router-dom";

function AddToCart({ match }) {
  const [product, setProduct] = useState({});

  //get one user!
  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/product/${match.params.id}`)
      .then((res) => {
        setProduct(res.data.data);
      });
  }, []);

  function handleChange(evt) {
    const value = evt.target.value;
    setProduct({
      ...product,
      [evt.target.name]: value,
    });
  }

  const [cart, setCart] = useState(() => {
    const test1 = localStorage.getItem("cart");
    const test2 = JSON.parse(test1);
    return test2;
  });
  const [quantity, setQuantity] = useState("");
  const addToCart = (item) => {
    const temp = cart;
    temp.push({ item, quantity });

    setCart(temp);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  return (
    <div>
      <Main />

      <div className="container">
        <Button color="success" size="lg" >
          + Product
        </Button>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>quantity</th>
              <th>Unit</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" value={product.index} onChange={handleChange}>
                {product.index}
              </th>
              <td>{product.ProductName}</td>
              <td>
                <Input onChange={(e) => setQuantity(e.target.value)}></Input>
              </td>
              <td onChange={handleChange}>{product.Unit}</td>
              <td value={product.Price} onChange={handleChange}>
                {product.Price} $
              </td>
              <td>
                <Button
                  color="primary"
                  outline
                  onClick={() => {
                    addToCart(product);
                  }}
                  href={`/cart`}
                >
                  Save
                </Button>
                <Button color="danger" outline>
                  {" "}
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
export default AddToCart;
