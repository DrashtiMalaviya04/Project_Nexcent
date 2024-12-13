import React from "react";
import { clientImageSrc } from "../constants";
import Container from "react-bootstrap/Container";

const Customer = () => {
  return (
    <>
      <section className="bg-light mt-5">
        <Container>
          <div className="d-flex flex-lg-row flex-column justify-content-around align-item-center px-5 py-5 gap-3 container">
            <img src="/feedback.svg" alt="" data-aos="fade-right" />
            <article className="px-3" data-aos="fade-left">
              <p>
                Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
                lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin
                eu enim metus. Vivamus sed libero ornare, tristique quam in,
                gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi
                laoreet elit at ligula molestie, nec molestie mi blandit.
                Suspendisse cursus tellus sed augue ultrices, quis tristique
                nulla sodales. Suspendisse eget lorem eu turpis vestibulum
                pretium. Suspendisse potenti. Quisque malesuada enim sapien,
                vitae placerat ante feugiat eget. Quisque vulputate odio neque,
                eget efficitur libero condimentum id. Curabitur id nibh id sem
                dignissim finibus ac sit amet magna.
              </p>
              <h4 className="fw-bold  text-success">Tim Smith</h4>
              <p>British Dragon Boat Racing Association</p>
              {/* <div className="d-flex  flex-md-row flex-column align-item-center justify-content-between"> */}
              <div className="d-flex  row-cols-8 align-item-center gap-3">
                {clientImageSrc.map((items) => (
                  <img
                    src={items}
                    key={items}
                    alt="img"
                    height={48}
                    width={48}
                    className="object-fit-contain"
                  />
                ))}
                <div className="cols">
                  <h1 className="text-success fs-5 fw-semibold">
                    Meet All Customers &#8594;
                  </h1>
                </div>
              </div>
            </article>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Customer;
