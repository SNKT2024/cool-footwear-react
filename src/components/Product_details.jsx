import React, { useEffect, useState } from "react";
import "../css/color.css";
import img1 from "../assets/images/cover-img-1.jpg";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Form,
  Image,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Product_details() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);

  //   GetData

  const getData = () => {
    axios
      .get(
        "https://646bb7ff7d3c1cae4ce43314.mockapi.io/footwear/footwear/" + id
      )
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div className="detail-wrapper bgc1">
        <div className="bread">
          <Container>
            <Breadcrumb>
              <BreadcrumbItem className="m-auto p-1 ms-0 me-0">
                HOME
              </BreadcrumbItem>
              <BreadcrumbItem active className="m-auto p-1 ms-0">
                PRODUCT DETAILS
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>

        <Container>
          <Row className="mt-5">
            <>
              <Col lg={7} className="rounded shadow-lg">
                <div className="img text-center">
                  <img
                    src={data.image}
                    className="img-fluid"
                    style={{ width: "20rem" }}
                    alt=""
                  />
                </div>
              </Col>
              <Col lg={4} className="ms-5">
                <Row className="mb-3">
                  <h3>{data.title}</h3>
                </Row>
                <Row className="mb-3">
                  <h4>₹ {data.price}</h4>
                </Row>
                <Row className="mb-3">
                  <p>{data.description}</p>
                </Row>
                <Row>
                  <Form.Group className="d-flex">
                    <Button
                      className="bgc2 border-0 ps-3 pe-3 text center"
                      style={{ backgroundColor: "#F05454" }}
                    >
                      -
                    </Button>
                    <Form.Control
                      className="border border-dark w-50 ms-1 me-1 text-center"
                      value={count}
                      name="qty"
                    ></Form.Control>
                    <Button
                      className="bgc2 border-0 ps-3 pe-3 text center"
                      style={{ backgroundColor: "#F05454" }}
                    >
                      +
                    </Button>
                  </Form.Group>
                </Row>
                <Row>
                  <Button className="w-50 ms-3 me-2 mt-3 ps-0 bgc2 border-0 pt-2 pb-2">
                    <ShoppingCartIcon />
                    Add To Cart
                  </Button>
                </Row>
              </Col>
            </>
          </Row>
        </Container>
      </div>
    </div>
  );
}
