import { CardBody, CardImg } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const BusinessCard = ({ img, text, title }) => {
  return (
    <>
      <Card className="py-2 border border-0 bg-silver">
        <CardBody className="d-flex align-items-center gap-3">
          <CardImg
            src={img}
            alt="image"
            style={{ width: "48px", height: "48px" }}
            className="flex-wrap"
          />
          <div className="d-flex flex-column justify-content-start">
            <Card.Title className="fs-2 fw-bold text-dark-emphasis">
              {text}
            </Card.Title>
            <Card.Text className="fs-6 text-body-secondary">{title}</Card.Text>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default BusinessCard;
