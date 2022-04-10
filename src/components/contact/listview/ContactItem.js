import React from "react";
import Image from "react-bootstrap/Image";

function ContactItem({ datum}) {
  return (
    <tr key={datum.login.uuid}>
      
      <td>
        <Image className="rounded-circle" src={datum.picture.thumbnail} />
      </td>
      <td>{datum.name.first}</td>
      <td>{datum.name.last}</td>
      <td>{datum.email}</td>
      <td>{datum.gender}</td>
      <td>
        <a href="#"> <span className="material-icons text-primary">
          edit</span>
        </a>
        <a href="#"><span className="material-icons text-danger">
          remove_circle</span>
        </a>
      </td>
    </tr>
  );
}

export default ContactItem;
