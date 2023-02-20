import MainLayout from "@layout/MainLayout";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ReactElement } from "react";

const ProductDetail = dynamic(
  () => import("@components/Product/ProductDetail"),
  { ssr: false }
);

const ProductDetailPage = () => {
  return (
    <>
      <Head>
        <title>Car Page</title>
      </Head>
      <ProductDetail />
    </>
  );
};

ProductDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};

export default ProductDetailPage;
