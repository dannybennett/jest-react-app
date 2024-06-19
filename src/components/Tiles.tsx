import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// colors - https://getbootstrap.com/docs/4.0/utilities/colors/

function Tiles() {
  return (
    <Row className="justify-content-md-center">
      <Col>
        <Card style={{ width: "36rem" }} className="justify-content-md-center">
          <Card.Body>
            <Card.Title>Card One</Card.Title>
            <Card.Text>First block of text</Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <Card style={{ width: "36rem" }} className="justify-content-md-center">
          <Card.Body>
            <Card.Title>Card Two</Card.Title>
            <Card.Text>Second block of text</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Tiles;
