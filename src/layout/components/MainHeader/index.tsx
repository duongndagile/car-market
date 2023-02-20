import { Col, Row } from "antd";
import styles from "./index.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

const MENUS = [
  {
    id: 1,
    title: "TRANG CHỦ",
  },
  {
    id: 2,
    title: "GIỚI THIỆU",
  },
  {
    id: 3,
    title: "XE LẮP RÁP",
    sub_menu: [
      {
        id: 1,
        name: "Toyota Vios 2023",
        price: "489,000,000",
        note: "VIOS KHUYYẾN MẠI LỚN + TẶNG 50% PHÍ TRƯỚC BẠ",
      },
      {
        id: 2,
        name: "Toyota Camry 2022",
        price: "1,489,000,000",
        note: "CAMRY KHUYYẾN MẠI LỚN + TẶNG 50% PHÍ TRƯỚC BẠ",
      },
      {
        id: 3,
        name: "Toyota Innova 2023",
        price: "889,000,000",
        note: "Innova KHUYYẾN MẠI LỚN + TẶNG 50% PHÍ TRƯỚC BẠ",
      },
    ],
  },
  {
    id: 4,
    title: "XE NHẬP KHẨU",
    sub_menu: [
      {
        id: 1,
        name: "Toyota Camry 2023",
      },
      {
        id: 2,
        name: "Toyota Camry 2023",
      },
      {
        id: 3,
        name: "Toyota Camry 2023",
      },
    ],
  },
  {
    id: 5,
    title: "XE CŨ",
  },
  {
    id: 6,
    title: "BẢNG GIÁ XE",
  },
  {
    id: 7,
    title: "TƯ VẤN",
  },
  {
    id: 8,
    title: "DỊCH VỤ",
  },
  {
    id: 9,
    title: "LIÊN HỆ",
  },
];

const MainHeader = () => {
  const router = useRouter();
  return (
    <Col className={styles.mainHeader}>
      <Row className={styles.headerTop}></Row>
      <Row className={styles.headerMid}>
        <Col className={styles.logoContent}>
          <Image
            src={"/images/toyota-logo.png"}
            width={58}
            height={63}
            alt=""
          />
        </Col>
        <Col className={styles.listLinkContent}>
          {MENUS.map((item: { id: number; title: string; sub_menu?: any }) => {
            return (
              <>
                <div className={styles.link} key={item.id}>
                  {item.title}
                  {item?.sub_menu && " >"}
                  {item?.sub_menu && (
                    <div className={styles.subLinkContent}>
                      {item?.sub_menu.map((sub_menu: any) => {
                        console.log("sub_menu", sub_menu);
                        return (
                          <p
                            className={styles.subLink}
                            key={sub_menu.id}
                            onClick={() =>
                              router.push({
                                pathname: `/products/${sub_menu.id}`,
                                query: { detail: sub_menu },
                              })
                            }
                          >
                            {sub_menu.name}
                          </p>
                        );
                      })}
                    </div>
                  )}
                </div>
              </>
            );
          })}
        </Col>
      </Row>
    </Col>
  );
};

export default MainHeader;
