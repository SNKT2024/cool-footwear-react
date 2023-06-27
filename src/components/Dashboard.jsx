import React from "react";
import "../css/color.css";
import "../css/dashboard.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Card,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import GroupIcon from "@mui/icons-material/Group";
import users from "../assets/images/user.png";
import bag from "../assets/images/bag.png";
import order from "../assets/images/order.png";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  if (!isLoggedIn) {
    navigate("/login");
  }
  return (
    <div className="dashboard-wrapper bgc1">
      <Container>
        <div className="bread">
          <Container>
            <Breadcrumb>
              <BreadcrumbItem className="m-auto p-1 ms-0 me-0">
                ADMIN
              </BreadcrumbItem>
              <BreadcrumbItem active className="m-auto p-1 ms-0">
                DASHBOARD
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <div className="pb-5 ">
          <Row>
            <Col>
              <Card
                style={{ width: "15rem" }}
                className="rounded bgc2 text-center p-3"
              >
                <Card.Body>
                  <Card.Img src={users} />
                  <hr />

                  <Button className="bgc4 btn-admin">Users</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "15rem" }}
                className="rounded bgc2 text-center p-3"
              >
                <Card.Body>
                  <Card.Img src={bag} />
                  <hr />
                  <Link to={"/admin/products"}>
                    <Button className="bgc4 btn-admin">Products</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "15rem" }}
                className="rounded bgc2 text-center p-3"
              >
                <Card.Body>
                  <Card.Img src={order} />
                  <hr />
                  <Link to={"/admin/add_products/"}>
                    <Button className="bgc4 btn-admin">Add Products</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
