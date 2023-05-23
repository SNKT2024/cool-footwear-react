import React from "react";
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
export default function Buynow() {
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
                ALL PRODUCTS
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <Container>
          <div className="products">
            <Container>
              <Row>
                <div className="text-center mt-5 mb-5">
                  <h3 className="c3">VIEW ALL PRODUCTS</h3>
                </div>
              </Row>
              <Row className="mt-5">
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>

                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>
                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>
                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>
                      <Button>Add To Cart</Button>
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
                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>
                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>
                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>
                      <Button>Add To Cart</Button>
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
                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>
                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>
                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img src={img2} />
                    <Card.Body className="text-center">
                      <Card.Title>Product Name</Card.Title>
                      <Card.Text>$ PRICE</Card.Text>
                      <Button>Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
    </div>
  );
}
