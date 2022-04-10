import React from "react";
import { Card, Button} from "react-bootstrap";

function ContactCardItem({datum}) {
  return (
    <Card style={{ width: "18rem" }} className="shadow mb-5">
      <Card.Img
        variant="top"
        className="rounded-circle"
        src={datum.picture.large}
      />
      <Card.Body>
        <Card.Title>{datum.name.first}</Card.Title>
        <Card.Text>
          {datum.name.first}
          {datum.name.last}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCardItem;
