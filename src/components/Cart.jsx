import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Breadcrumb, BreadcrumbItem, Container, Table } from "react-bootstrap";
import { storeRemoveProduct } from "../state/cartSlice";

export default function Cart() {
  // const [data, setData] = useState([]);
  let data = useSelector((state) => state.cart);
  let dispatch = useDispatch();

  function removeProduct(e, product) {
    e.preventDefault();
    dispatch(storeRemoveProduct(product.id));
  }

  // getData

  // useEffect(() => {
  //   axios
  //     .get("https://646bb7ff7d3c1cae4ce43314.mockapi.io/footwear/cart")
  //     .then((res) => {
  //       setData(res.data);
  //     });
  // }, []);

  return (
    <div>
      <div className="bread">
        <Container>
          <Breadcrumb>
            <BreadcrumbItem className="m-auto p-1 ms-0 me-0">
              HOME
            </BreadcrumbItem>
            <BreadcrumbItem active className="m-auto p-1 ms-0">
              CART
            </BreadcrumbItem>
          </Breadcrumb>
        </Container>
      </div>
      <Container>
        <div className="cart-table">
          <Table>
            <thead>
              <tr className="text-center">
                <th>PRODUCT</th>
                <th></th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th>REMOVE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((eachData) => {
                return (
                  <tr>
                    <td className="text-center">
                      <img
                        src={eachData.image}
                        alt=""
                        style={{ width: "10rem" }}
                      />
                    </td>
                    <td className="text-center">{eachData.title}</td>
                    <td className="text-center">₹ {eachData.price}</td>
                    <td className="text-center">{eachData.quantity}</td>
                    <td className="text-center">
                      ₹ {eachData.quantity * eachData.price}
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => {
                          removeProduct(e, eachData);
                        }}
                      >
                        X
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </Container>
    </div>
  );
}
