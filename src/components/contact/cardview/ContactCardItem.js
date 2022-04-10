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
      <Card.Body className="text-center">
        <Card.Title >{datum.name.first+" " +datum.name.last}</Card.Title>
        <Card.Text>
          {datum.email}
          
          
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default ContactCardItem;
