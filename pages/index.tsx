import MainLayout from "@layout/MainLayout";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ReactElement } from "react";

const Home = dynamic(() => import("@components/Home"));

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Trang chủ</title>
      </Head>
      <Home />
    </>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout>{page}</MainLayout>;
};
export default HomePage;
