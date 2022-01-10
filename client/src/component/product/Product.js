import {
  Card,
  CardTitle,
  CardBody,
  CardSubtitle,
  CardText,
  Button,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";
import Main from "../layout/Main";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  //get all user!
  useEffect(() => {
    axios.get("http://localhost:9000/api/product").then((res) => {
      setProducts(res.data.data);
      console.log(res);
    });
  }, []);

  return (
    <div>
      <Main />
      {products.map((product) => (
        <Card className="container" body>
          <CardBody>
            <CardTitle tag="h5">{product.ProductName}</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {product.SupplierID ? product.SupplierID.ContactName : "NULL"}
            </CardSubtitle>
            <CardText>
              {product.CategoryID ? product.CategoryID.CategoryName : "null"}
            </CardText>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {product.Unit}
            </CardSubtitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              {product.Price} $
            </CardSubtitle>
            <CardSubtitle>
              <div>
                <Button color="primary" onClick={function noRefCheck() {}}>
                  Add To Cart
                </Button>
                <br />
                <br />
                <Toast isOpen={false}>
                  <ToastHeader toggle={function noRefCheck() {}}>
                    Toast title
                  </ToastHeader>
                  <ToastBody>SoLuong</ToastBody>
                </Toast>
              </div>
            </CardSubtitle>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}

export default Product;
