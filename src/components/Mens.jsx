import React from "react";
import "../css/color.css";
import "../css/mens.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Container,
  Image,
  Row,
  Nav,
  NavItem,
  Card,
} from "react-bootstrap";
import img1 from "../assets/images/cover-img-1.jpg";
import img2 from "../assets/images/item-1.jpg";
export default function Mens() {
  return (
    <div className="mens-wrapper bgc1" id="mens">
      <div className="bread">
        <Container>
          <Breadcrumb>
            <BreadcrumbItem className="m-auto p-1 ms-0 me-0">
              HOME
            </BreadcrumbItem>
            <BreadcrumbItem active className="m-auto p-1 ms-0">
              MEN
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </div>
      <div className="top-img">
        <Container>
          <Row>
            <Col>
              {" "}
              <div className="banner">
                <h1 className="h1-img">MEN'S</h1>
                <div className="nav-tags bgc2">
                  <Nav className="text-center">
                    <NavItem className="m-2 p-1">NEW ARRIVALS</NavItem>
                    <NavItem className="m-2 p-1">BEST SELLERS</NavItem>
                    <NavItem className="m-2 p-1">EXTENDED WIDTHS</NavItem>
                    <NavItem className="m-2 p-1">SALE</NavItem>
                  </Nav>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="products">
        <Container>
          <Row>
            <div className="text-center mt-5 mb-5">
              <h5 className="c3">VIEW ALL PRODUCTS</h5>
            </div>
          </Row>
          <Row className="mt-5">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mt-5 pb-5">
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img src={img2} />
                <Card.Body className="text-center">
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>$ PRICE</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
