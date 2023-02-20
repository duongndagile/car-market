import { Col, Tabs } from "antd";

import styles from "./index.module.scss";

const PRODUCTS = [
  {
    id: 1,
    name: "ALL",
    products: [
      {
        id: 1,
        name: "Toyota Vios 2023",
        type: "product sedan",
      },
      {
        id: 4,
        name: "Toyota Camry 2023",
        type: "product sedan",
      },
      {
        id: 2,
        name: "Toyota Vios 2023",
        type: "product pickup",
      },
      {
        id: 3,
        name: "Toyota Land Cruiser 1023",
        type: "product suv",
      },
    ],
  },
  {
    id: 2,
    name: "SEDAN",
    products: [
      {
        id: 1,
        name: "Toyota Vios 2023",
        type: "product sedan",
      },
      {
        id: 2,
        name: "Toyota Camry 2023",
        type: "product sedan",
      },
    ],
  },
  {
    id: 3,
    name: "SUV",
    products: [
      {
        id: 1,
        name: "Toyota Land Cruiser 2023",
        type: "product suv",
      },
    ],
  },
];

const Products = () => {
  return (
    <Col className={styles.productStyle}>
      <h3>Các sản phẩm của hãng</h3>
      <Tabs
        onChange={(key: string) => console.log(key)}
        type="card"
        items={PRODUCTS.map((car: any) => {
          return {
            label: car.name,
            key: car.id,
            children: car.products.map((item: any) => {
              return <p key={item.id}>{item.name}</p>;
            }),
          };
        })}
      />
    </Col>
  );
};

export default Products;
