import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/index.css";
import { HeaderNav, Footer } from "./components";
import {
  Hero,
  Client,
  Managepage,
  Pixelgrade,
  Business,
  Design,
  Customer,
  Market,
  Demo,
} from "./sections";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      delay: 500,
    });
  }, []);
  return (
    <>
      <HeaderNav />
      <Hero />
      <Client />
      <Managepage />
      <Pixelgrade />
      <Business />
      <Design />
      <Customer />
      <Market />
      <Demo />
      <Footer />
    </>
  );
}

export default App;
