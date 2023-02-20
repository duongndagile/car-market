import { Row, Col } from "antd";
import styles from "./index.module.scss";
import Image from "next/image";
import React from "react";
import FooterItem from "./FooterItem";
const PRODUCTS = [
  {
    id: 1,
    title: "XE 5 CHỖ",
    cars: [
      {
        id: 1,
        name: "Toyota Vios",
      },
      {
        id: 2,
        name: "Toyota Vios",
      },
      {
        id: 3,
        name: "Toyota Vios",
      },
      {
        id: 4,
        name: "Toyota Vios",
      },
    ],
  },
  {
    id: 2,
    title: "XE 7 CHỖ",
    cars: [
      {
        id: 1,
        name: "Toyota Vios",
      },
      {
        id: 2,
        name: "Toyota Vios",
      },
      {
        id: 3,
        name: "Toyota Vios",
      },
      {
        id: 4,
        name: "Toyota Vios",
      },
    ],
  },
  {
    id: 3,
    title: "XE BÁN CHẠY",
    cars: [
      {
        id: 1,
        name: "Toyota Vios",
      },
      {
        id: 2,
        name: "Toyota Vios",
      },
      {
        id: 3,
        name: "Toyota Vios",
      },
      {
        id: 4,
        name: "Toyota Vios",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Col className={styles.footer}>
      <Row className={styles.footerHead}>
        <Col className={styles.logo}>
          <Image
            src={"/images/toyota-logo.png"}
            width={58}
            height={63}
            alt="logo"
          />
        </Col>
        <Col className={styles.right}>
          <p className={styles.socialMedia}>Social Media</p>
          {/* <div>
              <Image
            </div> */}
        </Col>
      </Row>
      <Row className={styles.footerMiddle}>
        <div style={{ width: "1140px", display: "flex", margin: "0 auto" }}>
          <Col className={styles.detail}>
            <Row className={styles.infoCompany}>
              <p className={styles.name}>CÔNG TY TNHH MTV</p>
              <p className={styles.textInfo}>
                82 ngõ 116 Nhân Hoà, Nhân Chính, Thanh Xuân, HN
              </p>
              <p className={styles.textInfo}>duong.nd@agiletechsoftware.com</p>
              <p className={styles.phoneNumber}>0868661863</p>
            </Row>
          </Col>
          {PRODUCTS.map((product: any) => {
            return (
              <Col key={product.id} style={{ width: "20%" }}>
                <FooterItem data={product} />
              </Col>
            );
          })}
        </div>
      </Row>
      <Row className={styles.footerBottom}>
        <p className={styles.textBottom}>Copy right...</p>
      </Row>
    </Col>
  );
};

export default Footer;
