import styles from "./index.module.scss";

const FooterItem = ({ data }: any) => {
  console.log(data);
  return (
    <div>
      <p className={styles.title}>{data?.title}</p>
      {data?.cars?.map((car: any) => {
        return (
          <p className={styles.car} key={car?.id}>
            {car?.name}
          </p>
        );
      })}
    </div>
  );
};

export default FooterItem;
