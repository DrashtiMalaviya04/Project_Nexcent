import Container from "react-bootstrap/Container";
import { clientData } from "../constants";
import ManageCard from "../components/ManageCard";

const Managepage = () => {
  return (
    <>
      <Container>
        <article data-aos="fade-down" className="text-center mt-4 ">
          <h1 className="fs-1 fw-bold text-dark-emphasis pt-5">
            Manage your entire community
          </h1>
          <span className="d-block">in a single system</span>
          <p className="ft-light fs-6 text-body-secondary">
            Who is Nextcent suitable for?
          </p>
        </article>
        <div
          data-aos="zoom-in"
          className="d-flex justify-content-between align-items-center mt-4 flex-sm-row flex-column"
        >
          {clientData.map((item) => (
            <ManageCard {...item} key={item.title} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default Managepage;
