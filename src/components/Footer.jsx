import React from "react";
import "../css/color.css";
import "../css/footer.css";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer() {
  return (
    <div className="footer-wrapper bgc1 pt-5 ">
      <Container fluid>
        <Col lg={8} className="m-auto">
          <div className="footer pt-5">
            <Row className="">
              <Col>
                <h5 className="mb-3">ABOUT FOOTWEAR</h5>
                <p>
                  Even the all-powerful Pointing has no control about the blind
                  texts it is an almost unorthographic life
                </p>
              </Col>
              <Col>
                <h5>CUSTOMER CARE</h5>
                <ul>
                  <li>CONTACT</li>
                  <li>RETURNS/EXCHANGE</li>
                  <li>GIFT VOUCHER</li>
                  <li>WISHLIST</li>
                  <li>SPECIAL</li>
                  <li>CUSTOMER SERVICES</li>
                  <li>SITE MAPS</li>
                </ul>
              </Col>
              <Col>
                <h5>INFORMATION</h5>
                <ul>
                  <li>ABOUT US</li>
                  <li>DELIVERY INFORMATION</li>
                  <li>PRIVACY POLICY</li>
                  <li>SUPPORT</li>
                  <li>ORDER TRACKING</li>
                </ul>
              </Col>
              <Col>
                <h5>NEWS</h5>
                <ul>
                  <li>BLOG</li>
                  <li>PRESS</li>
                  <li>EXHIBITIONS</li>
                  <li>ADMIN LOGIN</li>
                </ul>
              </Col>
              <Col>
                <h5>CONTACT INFORMATION</h5>
                <ul>
                  <li>291 SOUTH 21TH STREET, SUITE 721 NEW YORK NY 10016</li>
                  <li>+ 1235 2355 98</li>
                  <li>PRIVACY POLICY</li>
                  <li>INFO@YOURSITE.COM</li>
                  <li>YOURSITE.COM</li>
                </ul>
              </Col>
            </Row>
            <Row className="mt-5 text-center">
              <p>
                Copyright © All rights reserved | This template is made with by
                ColorlibDemo Images: Unsplash , Pexels.com
              </p>
            </Row>
          </div>
        </Col>
      </Container>
    </div>
  );
}
