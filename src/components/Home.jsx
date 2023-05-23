import React from "react";
import { Button, Carousel, Col, Container, Image, Row } from "react-bootstrap";
import img1 from "../assets/images/img_bg_1.jpg";
import img2 from "../assets/images/img_bg_2.jpg";
import img3 from "../assets/images/img_bg_3.jpg";
import img4 from "../assets/images/women.jpg";
import "../css/home.css";
import "../css/color.css";
export default function Home() {
  return (
    <div className="home-wrapper bgc1">
      <div className="carousel-1">
        <Carousel slide>
          <Carousel.Item>
            <Image src={img1} className="d-block w-100 caro-img" fluid />
            <Carousel.Caption>
              <h1 className="fs-1">Men's</h1>
              <h2>Shoes</h2>
              <h2>Collection</h2>
              <p>New trendning shoes</p>
              <Button className="bgc2 border-0 btn-shop">
                Shop Collection
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={img2} className="d-block w-100 caro-img" fluid />
            <Carousel.Caption>
              <h1 className="fs-1">Huge</h1>
              <h2>Sale</h2>
              <h2>50% Off</h2>
              <p>Big sale sandals</p>
              <Button className="bgc2 border-0 btn-shop">
                Shop Collection
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image src={img3} className="d-block w-100 caro-img" fluid />

            <Carousel.Caption>
              <h1 className="fs-1">New</h1>
              <h2>Arrival</h2>
              <h2>30% Off</h2>
              <p>New stylish shoes for men</p>
              <Button className="bgc2 border-0 btn-shop">
                Shop Collection
              </Button>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="tagline p-5 text-center">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="tag">
                <h1 className="fw-bold c3">
                  It started with a simple idea: Create quality, well-designed
                  products that I wanted myself.
                </h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section">
        <Container fluid>
          <Row className="">
            <Col lg={6}>
              <div className="mens h-75">
                <a href="">
                  {" "}
                  <Image src={img1} className="img-fluid sec-img"></Image>
                </a>
                <h1 className="text-center mt-4 c4">Shop Men's Collection</h1>
              </div>
            </Col>
            <Col lg={6}>
              <div className="womens h-75">
                <a href="">
                  <Image src={img4} className="img-fluid sec-img"></Image>
                </a>
                <h1 className="text-center mt-4 c4">Shop Women's Collection</h1>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
