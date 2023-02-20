import Slider from "@components/Home/components/Slider";
import { Button, Col, Row } from "antd";
import styles from "./index.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const ProductDetail = (detail: any) => {
  const router = useRouter();
  console.log(router);
  return (
    <Col className={styles.productDetail}>
      <Slider />
      <Row className={styles.showroom}>
        <Col className={styles.detailCar}>
          <h3>{detail?.name}</h3>
          <p>{detail?.discount}</p>
          <p>Giá từ: {detail?.price}</p>
          <Button>Nhận báo giá</Button>
        </Col>
        <Col className={styles.colorCar}>
          <Image
            src={"/images/toyota-camry-2022.png"}
            width={600}
            height={250}
            alt=""
          />
          <div>
            {detail?.colors?.map((color: any) => {
              return (
                <div key={color?.id}>
                  <div></div>
                  <p>{color?.name}</p>
                </div>
              );
            })}
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default ProductDetail;
