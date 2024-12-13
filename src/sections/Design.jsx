import Button from "react-bootstrap/Button";
const Design = () => {
  return (
    <>
      <section className="mt-5">
        <div className="d-flex flex-lg-row flex-column justify-content-around align-items-center px-5">
          <img alt="Images" src="useImg.svg" data-aos="fade-right" />
          <article className=" align-items-center mx-5 " data-aos="fade-left">
            <h1 className="fw-bold ">
              <p>How to design your site footer </p> like&nbsp;
              <span className="text-success">we did ?</span>
            </h1>
            <p className="fw-light fs-6">
              Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor,
              augue nec tincidunt molestie, massa nunc varius arcu, at
              scelerisque elit erat a magna. Donec quis erat at libero ultrices
              mollis. In hac habitasse platea dictumst. Vivamus vehicula leo
              dui, at porta nisi facilisis finibus. In euismod augue vitae nisi
              ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
              commodo faucibus efficitur quis massa. Praesent felis est, finibus
              et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus
              ipsum id gravida.
            </p>
            <Button variant="success fs-4 mt-4">Learn More </Button>
          </article>
        </div>
      </section>
    </>
  );
};

export default Design;
