import React from "react";
import { useSelector } from "react-redux";

import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
  Nav,
  Row,
} from "react-bootstrap";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import "../css/header.css";
import { FormLabel } from "@mui/material";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import "../css/color.css";

export default function Header() {
  let cart = useSelector((state) => state.cart);

  return (
    <div className="top-menu-wrapper bgc1">
      <Container>
        <div className="top-menu">
          <Row>
            <Col lg={12} className="m-auto mt-5">
              <div className="top-part d-flex">
                <div className="ms-3">
                  <h1 className="c3 mb-3">COOL FOOTWEAR</h1>
                </div>
                <div className="col-lg-3 search-bar rounded rounded-pill">
                  <Form>
                    <InputGroup>
                      <FormControl className=".form-control"></FormControl>
                      <Button className="bgc2 search-icon">
                        <SearchIcon />
                      </Button>
                    </InputGroup>
                  </Form>
                </div>
              </div>
              <div className="bottom-part d-flex">
                <Nav className="nav">
                  <Nav.Item>
                    <Nav.Link className="c3 nav-link">
                      <Link to={"/"} className="text-decoration-none c3 link">
                        HOME
                      </Link>
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="c3 nav-link">
                      <Link
                        to={"/mens"}
                        className="text-decoration-none c3 link"
                      >
                        MENS
                      </Link>
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link className="c3 nav-link">
                      <Link
                        to={"/womens"}
                        className="text-decoration-none c3 link"
                      >
                        WOMENS
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  {/* <Nav.Item>
                    <Nav.Link className="c3 nav-link">
                      <Link
                        to={"/all_products"}
                        className="text-decoration-none c3 link"
                      >
                        ALL PRODUCTS
                      </Link>
                    </Nav.Link>
                  </Nav.Item> */}
                  <Nav.Item>
                    <Nav.Link className="c3 nav-link">
                      <Link
                        to={"/buynow"}
                        className="text-decoration-none c3 link"
                      >
                        BUY NOW
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item></Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="c3 nav-link">
                      <Link
                        to={"/about"}
                        className="text-decoration-none c3 link"
                      >
                        ABOUT
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="c3 nav-link">
                      <Link
                        to={"/contact"}
                        className="text-decoration-none c3 link"
                      >
                        CONTACT
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="c3 nav-link">
                      <Link
                        to={"/login"}
                        className="text-decoration-none c3 link"
                      >
                        ADMIN LOGIN
                      </Link>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Nav>
                  <div className="cart m-auto">
                    <Nav.Item>
                      <Nav.Link className="c3 nav-link">
                        <Link to={"/cart"} className="text-decoration-none c3">
                          <ShoppingCartIcon />
                          CART [{cart.length}]
                        </Link>
                      </Nav.Link>
                    </Nav.Item>
                  </div>
                </Nav>
              </div>
            </Col>
          </Row>
        </div>
        <div className="sale-banner bgc2"></div>
      </Container>
      <Container fluid className="bgc2 text-center">
        <Col lg={12} className="m-auto">
          <Row>
            <div className="p-3">
              <h4 className="m-auto text-light fs-5">
                25% OFF (ALMOST) EVERYTHING! USE CODE: SUMMER SALE
              </h4>
            </div>
          </Row>
        </Col>
      </Container>
    </div>
  );
}
