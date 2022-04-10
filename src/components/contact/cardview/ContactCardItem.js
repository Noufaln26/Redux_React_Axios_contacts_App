import React,{useState} from "react";
import { Card, Button} from "react-bootstrap";
import ConfirmModal from "../../ConfirmModal";



function ContactCardItem({datum}) {
  const [show, setShow] = useState(false);

  const handleClick =()=>{
    setShow(true)
  }

  return (
    <>
    {show && <ConfirmModal show={show} setShow={setShow} subject="Do you want to delete this contact?"/>}
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
        <Card.Text>
          {datum.gender}
        </Card.Text>
        <Button variant="primary m-2" >Edit</Button>
        <Button variant="danger" onClick={handleClick}>Delete</Button>
      </Card.Body>
    </Card>
    </>
  );
}

export default ContactCardItem;
