import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import img1 from "../assets/images/cover-img-1.jpg";
import img2 from "../assets/images/item-1.jpg";
import "../css/all_products.css";
import "../css/color.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { storeAddToCart } from "../state/cartSlice";
export default function Buynow() {
  // useState to store data

  let dispatch = useDispatch();

  const [data, setData] = useState([]);

  //getData

  const getData = () => {
    axios
      .get("https://646bb7ff7d3c1cae4ce43314.mockapi.io/footwear/footwear")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // Add TO Cart

  const addToCart = (e, product) => {
    e.preventDefault();
    let cartproduct = {
      id: product.id,
      title: product.title,
      price: product.price,
      mrp: product.mrp,
      image: product.image,
      quantity: 1,
    };
    dispatch(storeAddToCart(cartproduct));
  };

  return (
    <div>
      <div className="all-wrapper bgc1">
        <div className="bread">
          <Container>
            <Breadcrumb>
              <BreadcrumbItem className="m-auto p-1 ms-0 me-0">
                HOME
              </BreadcrumbItem>
              <BreadcrumbItem active className="m-auto p-1 ms-0">
                BUY NOW
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <Container>
          <div className="products">
            <Row>
              <div className="text-center mt-5 mb-5">
                <h3 className="c3">BUY NOW</h3>
              </div>
            </Row>
            <Container>
              <Row className="mt-5">
                {data.map((eachData) => {
                  return (
                    <Col>
                      <Link
                        to={"/product_details/" + eachData.id}
                        className="text-decoration-none"
                      >
                        <Card style={{ width: "18rem" }} className="mb-5">
                          <Card.Img
                            src={eachData.image}
                            className="img-fluid"
                          />
                          <Card.Body className="text-center">
                            <Card.Title style={{ fontSize: "1vw" }}>
                              {eachData.title}
                            </Card.Title>
                            <Card.Text style={{ fontSize: "1vw" }}>
                              ₹ {eachData.price}
                            </Card.Text>
                            <Button
                              onClick={(e) => {
                                addToCart(e, eachData);
                              }}
                            >
                              Add To Cart
                            </Button>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
}
