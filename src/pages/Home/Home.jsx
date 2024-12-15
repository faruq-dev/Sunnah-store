import Footer from "../../components/shared/Footer";
import Header from "../../components/shared/Header";
import CarouselElement from "./Carousel";

const Home = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen mt-20">
        <div className="h-[450px]">
          <CarouselElement />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
