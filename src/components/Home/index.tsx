import FormInfo from "./components/FormInfo";
import Products from "./components/Products";
import Slider from "./components/Slider";

const Home = () => {
  return (
    <div style={{ width: "100vw", margin: "0 auto" }}>
      <Slider />

      <Products />

      <FormInfo />
    </div>
  );
};

export default Home;
