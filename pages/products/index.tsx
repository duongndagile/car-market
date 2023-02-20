import MainLayout from "@layout/MainLayout";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ReactElement } from "react";

const Product = dynamic(() => import("@components/Product"));

const ProductPage = () => {
  return (
    <>
      <Head>
        <title>Sản phẩm</title>
      </Head>
      <Product />
    </>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ProductPage;
