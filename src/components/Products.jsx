import React, { useEffect, useState } from "react";
import "../css/color.css";
import "../css/products.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { LinkContainer } from "react-router-bootstrap";

export default function Products() {
  const [data, setData] = useState([]);

  //Get

  const getData = () => {
    axios
      .get("https://646bb7ff7d3c1cae4ce43314.mockapi.io/footwear/footwear")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  //Delete

  const handleDelete = (id) => {
    axios
      .delete(
        `https://646bb7ff7d3c1cae4ce43314.mockapi.io/footwear/footwear/${id}`
      )
      .then((res) => {
        alert("Deleted Succesfully");
        getData();
      });
  };

  return (
    <div className="prod-wrapper bgc1   ">
      <Container>
        <div className="bread">
          <Container>
            <Breadcrumb>
              <BreadcrumbItem className="m-auto p-1 ms-0 me-0">
                ADMIN
              </BreadcrumbItem>
              <BreadcrumbItem active className="m-auto p-1 ms-0">
                PRODUCTS
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        <div className="products">
          <Row>
            <Col>
              <Table>
                <thead className="bgc2">
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>MRP</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((eachData, i) => {
                    return (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>
                          <img
                            src={eachData.image}
                            style={{ height: "100px", width: "100px" }}
                            alt=""
                          />
                        </td>
                        <td>{eachData.title}</td>
                        <td>{eachData.category}</td>
                        <td>{eachData.price}</td>
                        <td>{eachData.mrp}</td>
                        <td>
                          <LinkContainer
                            to={"/admin/add_products/" + eachData.id}
                            className="me-1"
                          >
                            <Button>
                              <EditIcon />
                            </Button>
                          </LinkContainer>
                          <Button
                            onClick={(e) => {
                              handleDelete(eachData.id);
                            }}
                          >
                            <DeleteIcon />
                          </Button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
