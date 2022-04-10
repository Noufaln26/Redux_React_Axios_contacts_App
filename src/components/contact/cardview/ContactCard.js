import React from "react";

import { mockjson } from "../../../assets/Mockjson";
import { Card, Button, Row, Container, Col } from "react-bootstrap";
import ContactCardItem from "./ContactCardItem";

function ContactCard({data}) {
 
  return (
    <>
      <Container
        className="d-flex align-content-start flex-wrap justify-content-between"
        md={4}
      >
        {data.map((datum, index) => (
          <Row key={index}>
            <Col>
              <ContactCardItem datum={datum}/>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default ContactCard;
