import React from "react";
import { Table } from "react-bootstrap";
import { mockjson } from "../../../assets/Mockjson";

import ContactItem from "./ContactItem";


function Contact() {
  const data = mockjson.results;
  //console.log(data)
  //console.log(data[0].login.uuid)


  return (
    <div className="container m-100">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Profile Pic</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((datum,index) => (
          
            <ContactItem datum={datum} index={index}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Contact;
