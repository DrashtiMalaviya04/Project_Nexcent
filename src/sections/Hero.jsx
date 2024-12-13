import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Hero = () => {
  return (
    <>
      <section className="bg-body-tertiary py-5">
        <Container>
          <div
            data-aos="fade-right"
            className=" d-flex justify-content-between flex-lg-row flex-column align-items-center"
          >
            <article>
              <h1 className="fw-bold text-gray">Lessons and insights</h1>
              <span className="text-success fs-1 fw-bold">from 8 years</span>

              <p className="fw-light fs-6">
                Where to grow your business as a photographer: site or social
                media?
              </p>
              <Button variant="success">Register</Button>
            </article>
            <img data-aos="fade-up-left" src="/HeroImg.svg" alt="" />
          </div>
        </Container>
      </section>
    </>
  );
};

export default Hero;
