import { Carousel } from "antd";
import Image from "next/image";
import styles from "./index.module.scss";

const Slider = () => {
  const onChange = (currentSlide: number) => {
    // console.log(currentSlide);
  };

  return (
    <>
      <Carousel autoplay afterChange={onChange} className={styles.carousel}>
        <div className={styles.slide}>
          <Image
            src={"/images/toyota-camry-2022.png"}
            width={"1700px"}
            height={"625px"}
            objectFit="contain"
            className={styles.image}
            alt=""
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={"/images/toyota-cross-2023.jpg"}
            alt=""
            width={"1700px"}
            height={"625px"}
            objectFit="contain"
            className={styles.image}
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={"/images/toyota-veloz-cros-top-2022.jpg"}
            alt=""
            width={"1700px"}
            height={"625px"}
            objectFit="contain"
            className={styles.image}
          />
        </div>
        <div className={styles.slide}>
          <Image
            src={"/images/toyota-camry-2022.png"}
            alt=""
            width={"1700px"}
            height={"625px"}
            objectFit="contain"
            className={styles.image}
          />
        </div>
      </Carousel>
    </>
  );
};

export default Slider;
