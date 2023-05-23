import React from "react";
import "../css/color.css";
import "../css/about.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Col,
  Container,
  Row,
} from "react-bootstrap";

export default function About() {
  return (
    <div className="about-wrapper">
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

      <div className="main-sec">
        <Container>
          <div className="main">
            <Row>
              <Col>
                <div className="vid"></div>
              </Col>
              <Col>
                <div className="dis">
                  <h2>Footwear the leading eCommerce Store around the Globe</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Vero inventore architecto minima praesentium sunt deserunt.
                    Aspernatur facere id non voluptas aut ad deleniti reiciendis
                    provident? Error repellat ab sunt dolore dolor unde, qui
                    iure quod omnis nesciunt repellendus nostrum eveniet. Facere
                    possimus animi beatae sed aspernatur illo, nisi perferendis
                    cumque.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </div>
  );
}
