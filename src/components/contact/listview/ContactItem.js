import React,{useState} from "react";
import {Image} from "react-bootstrap";
import ConfirmModal from "../../ConfirmModal";

function ContactItem({ datum}) {
  const [show, setShow] = useState(false);

  const handleClick =()=>{
    setShow(true)
  }


  return (
    <>
    {show && <ConfirmModal show={show} setShow={setShow} subject="Do you want to delete this contact?"/>}
    <tr key={datum.login.uuid}>
      
      <td>
        <Image className="rounded-circle" src={datum.picture.thumbnail} />
      </td>
      <td>{datum.name.first}</td>
      <td>{datum.name.last}</td>
      <td>{datum.email}</td>
      <td>{datum.gender}</td>
      <td>
        <a href="#" > <span className="material-icons text-primary">
          edit</span>
        </a>
        <a href="#"><span className="material-icons text-danger" onClick={handleClick}>
          remove_circle</span>
        </a>
      </td>
      
    </tr>
    
    </>
  );
}

export default ContactItem;
