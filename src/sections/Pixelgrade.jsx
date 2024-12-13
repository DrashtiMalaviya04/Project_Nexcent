import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

const Pixelgrade = () => {
  return (
    <>
      <Container>
        <div className="d-flex flex-lg-row justify-content-lg-between flex-column justify-content-center align-items-center my-5">
          <img
            src="/pixelgrade.svg"
            alt=""
            data-aos="fade-right"
            className="w-auto h-auto"
            height={450}
          />
          <article className="w-50" data-aos="fade-left">
            <h1 className="fw-bold ">
              <p className="mb-1 ">The unseen of spending three</p>
              year at &nbsp;
              <span className=" text-success fw-bold">Pixelgrade</span>
            </h1>
            <p className=" mt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
              Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
              tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
              Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
              elementum pulvinar odio.
            </p>
            <Button variant="success fs-4">Learn More </Button>
          </article>
        </div>
      </Container>
    </>
  );
};

export default Pixelgrade;
