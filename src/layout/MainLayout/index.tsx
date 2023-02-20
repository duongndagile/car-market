import dynamic from "next/dynamic";
const MainHeader = dynamic(() => import("@layout/components/MainHeader"));
const Footer = dynamic(() => import("@layout/components/Footer"));

const MainLayout = ({ children }: any) => {
  return (
    <>
      <MainHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
