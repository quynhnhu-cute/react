import React, { Component } from "react";

export default class DemoListAndKey extends Component {
  productList = [
    {
      id: 1,
      name: "Crystal Black",
      price: 1500,
      image: "./products/black-car.jpg",
    },
    {
      id: 2,
      name: "Modern Steel",
      price: 3200,
      image: "./products/steel-car.jpg",
    },
    {
      id: 3,
      name: "Lunar Silver",
      price: 6000,
      image: "./products/silver-car.jpg",
    },
    {
      id: 4,
      name: "Royalle Black",
      price: 9000,
      image: "./products/red-car.jpg",
    },
  ];

  renderProductList = () => {
    return this.productList.map((element, index) => {
      const { id, name, price, image } = element;
      return (
        <tr key={index}>
          <td>{id}</td>
          <td>{name}</td>
          <td>{price}$</td>
          <td>
              <img src={image} width="50px" alt="" />
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <h1 className="text-center">LIST OF FASHION CAR</h1>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
           {this.renderProductList()}
          </tbody>
        </table>
      </div>
    );
  }
}
