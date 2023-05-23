import React, { useEffect, useState } from "react";
import "../css/color.css";
import "../css/add.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Add_Proucts() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    category: "",
    price: "",
    mrp: "",
    image: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  // Update & Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (id === undefined) {
      axios
        .post(
          "https://646bb7ff7d3c1cae4ce43314.mockapi.io/footwear/footwear",
          data
        )
        .then((res) => {
          alert("Added Succesfully");

          navigate("/admin/products");
        });
    } else {
      axios
        .put(
          `https://646bb7ff7d3c1cae4ce43314.mockapi.io/footwear/footwear/${id}`,
          data
        )
        .then((res) => {
          alert("Update Succesfully");
          navigate("/admin/products");
        });
    }
  };

  // GetData

  const getData = () => {
    axios
      .get(
        `https://646bb7ff7d3c1cae4ce43314.mockapi.io/footwear/footwear/${id}`
      )
      .then((res) => {
        setData({
          title: res.data.title,
          category: res.data.category,
          price: res.data.price,
          mrp: res.data.mrp,
          image: res.data.image,
        });
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="bread">
        <Container>
          <Breadcrumb>
            <BreadcrumbItem className="m-auto p-1 ms-0 me-0">
              HOME
            </BreadcrumbItem>
            <BreadcrumbItem active className="m-auto p-1 ms-0">
              ADD PRODUCTS
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </div>
      <Container>
        <div className="add">
          <Form>
            <Row className="mb-3">
              <Col>
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={data.title}
                  onChange={handleChange}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Label>Category</Form.Label>
                <Form.Select
                  onChange={(e) => {
                    handleChange(e);
                  }}
                  name="category"
                  value={data.category}
                >
                  <option value="">Choose</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Form.Select>
              </Col>
            </Row>
            <Row className="mb-3  ">
              <Col>
                <Form.Label>Price</Form.Label>
                <Form.Control
                  type="number"
                  name="price"
                  value={data.price}
                  onChange={handleChange}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Label>MRP</Form.Label>
                <Form.Control
                  type="number"
                  name="mrp"
                  value={data.mrp}
                  onChange={handleChange}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Label>Image</Form.Label>
                <Form.Control
                  type="url"
                  name="image"
                  value={data.image}
                  onChange={handleChange}
                ></Form.Control>
              </Col>
              <Col>
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label>Upload Image</Form.Label>
                  <Form.Control type="file" />
                </Form.Group>
              </Col>
            </Row>

            <Row className="">
              <Col lg={10}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Description</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="">
              <Col>
                <Button
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                >
                  Submit
                </Button>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
}
