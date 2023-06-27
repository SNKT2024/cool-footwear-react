import React from "react";
import "../css/color.css";
import "../css/admin.css";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  Switch,
  useNavigate,
} from "react-router-dom";

import { Button, Col, Container, Nav, Row } from "react-bootstrap";

export default function Admin() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <div className="admin-wrapper pt-3 bgc1">
      <Container fluid className="">
        <Row>
          <div className="innner_nav col-lg-2 bgc1">
            <Nav className="flex-column">
              <Nav.Item className="m-3 nav-i">
                <Link to={"/admin/dashboard"} className="nav-item-admin c4">
                  DASHBOARD
                </Link>
              </Nav.Item>
              <Nav.Item className="m-3 nav-i">
                <Link to={"/admin/products"} className="nav-item-admin c4">
                  PRODUCTS
                </Link>
              </Nav.Item>
              <Nav.Item className="m-3 nav-i">
                <Link to={"/admin/add_products"} className="nav-item-admin c4">
                  ADD PRODUCT
                </Link>
              </Nav.Item>
              {/* <Nav.Item className="m-3 nav-i">
                <Link to={"/admin/order"} className="nav-item-admin c4">
                  ORDER
                </Link>
              </Nav.Item> */}
              <Nav.Item className="m-3">
                <Button onClick={handleLogout}>Logout</Button>
              </Nav.Item>
            </Nav>
          </div>
          <div className="col-lg-10 ">
            <Col sm={2} lg={12}>
              <Outlet />
            </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
}
