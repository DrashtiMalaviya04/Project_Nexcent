import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { socialMedialImg, FooterContacts } from "../constants";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark py-5 ">
        <Container className="text-white">
          <div
            className="d-flex flex-lg-row flex-column justify-content-lg-between
           justify-content-center align-items-start "
          >
            <div className=" ps-5">
              <a
                href="#"
                className=" d-flex align-item-center gap-2 navbar-brand flex-row"
              >
                <img
                  src="logo.svg"
                  width={35}
                  height={24}
                  className=" flex-warp object-fit-contain"
                  alt="Images"
                />
                <span className="  fs-2 fw-bold text-white ">Nexcent</span>
              </a>
              <article className=" mt-4 text-light">
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
              </article>

              <div className="d-flex mt-5 gap-3">
                {socialMedialImg.map((item) => (
                  <div
                    key={item}
                    className="border border-white px-2 py-2 rounded-circle flex-wrap"
                  >
                    <img
                      src={item}
                      alt="social-media"
                      height={24}
                      width={24}
                      className="object-fit-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="  d-flex flex-lg-nowrap flex-wrap gap-5 p-2"
              data-aos="fade-up"
            >
              {FooterContacts.map(({ tital, list }, index) => (
                <div
                  key={index}
                  className="d-flex flex-column gap-3 text-white"
                >
                  <h5>{tital}</h5>
                  <ul className="d-flex flex-column gap-2 list-unstyled">
                    {list.map((item, inx) => (
                      <li key={inx} className="gap-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="gap-2 p-2" data-aos="fade-up">
                <h5 className="text-light">Stay up to Data</h5>
                <div className="input-group rounded-right w-100">
                  <Form.Control
                    type="email"
                    placeholder="Enter your email Address"
                    className="from-control bg-email shadow-none border border-0"
                  />
                  <Button
                    variant="secondary"
                    className="bg-email border border-0"
                  >
                    <img
                      src="./send.svg"
                      alt="social"
                      width={20}
                      height={20}
                      color="transparent"
                    />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
