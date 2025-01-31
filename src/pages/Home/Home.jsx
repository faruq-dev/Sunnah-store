import { Helmet } from "react-helmet-async";
import CarouselElement from "./Carousel";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Sunnah Store | Home</title>
      </Helmet>
      <div className="min-h-screen mt-20">
        <div className="h-[450px]">
          <CarouselElement />
        </div>
      </div>
    </>
  );
};

export default Home;
