import React from "react";
import { clientImageSrc } from "../constants";
import Container from "react-bootstrap/Container";

const Client = () => {
  return (
    <>
      <Container>
        <section className="bg-white">
          <div>
            <article data-aos="fade-down" className="text-center">
              <h1 className="fw-bold mt-5">Our Clients</h1>
              <p>We have been working with some Fortune 500+ clients</p>
            </article>
            <div
              data-aos="zoom-in"
              className="d-flex align-items-center justify-content-between my-5 flex-wrap"
            >
              {clientImageSrc.map((item) => (
                <img
                  key={item}
                  src={item}
                  alt="clients"
                  height={48}
                  width={48}
                  className="object-fit-contain"
                />
              ))}
            </div>
          </div>
        </section>
      </Container>
    </>
  );
};

export default Client;
