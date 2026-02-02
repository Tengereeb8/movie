import { Body } from "./Body";
import { MovieCarousel } from "./Carousel";
import { Footer } from "./components/Footer";
import { Nav } from "./components/Navigation";

const Home = () => {
  return (
    <div>
      <Nav />
      <MovieCarousel />
      <Body />
      <Footer />
    </div>
  );
};
export default Home;
