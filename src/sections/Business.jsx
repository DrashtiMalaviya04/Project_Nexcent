import Container from "react-bootstrap/Container";
import { business } from "../constants";
import BusinessCard from "../components/BusinessCard";

const Business = () => {
  return (
    <>
      <section className="bg-silver py-3">
        <Container>
          <div
            className="row align-items-center row-cols-sm-2"
            data-aos="fade-right"
          >
            <article className="ps-5">
              <h1 className=" fw-bold text-dark-emphasis fs-1">
                Helping a local
                <p className="text-success mb-0"> business reinvent itself </p>
              </h1>
              <p className="t-light fs-6 ">
                We reached here with our hardwork and dedication.
              </p>
            </article>
            <div
              className=" row row-cols-sm-2  align-items-center"
              data-aos="zoom-in"
            >
              {business.map((status) => (
                <BusinessCard {...status} key={status.img} />
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Business;
