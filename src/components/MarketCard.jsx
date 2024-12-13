import { Card } from "react-bootstrap";

const MarketCard = ({ imgsrc, title }) => {
  return (
    <>
      <Card className="border border-0" style={{ maxWidth: "23rem" }}>
        <Card.Body>
          <Card.Img
            variant="top"
            src={imgsrc}
            width={368}
            height={260}
            className="object-fit-contain flex-wrap"
          />
          <div className="px-3 py-4 w-75 shadow text-center d-flex flex-column justify-content-center align-items-center bg-white position-absolute top-100 start-50 translate-middle rounded-3 ">
            <Card.Title className="fs-4 text-dark-emphasis px-2">
              {title}
            </Card.Title>

            <Card.Link
              className="link-success link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover  px-3 py-2"
              href="/blog"
            >
              Read more →
            </Card.Link>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default MarketCard;
