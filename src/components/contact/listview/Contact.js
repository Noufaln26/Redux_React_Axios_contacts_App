import React from "react";
import { Table } from "react-bootstrap";


import ContactItem from "./ContactItem";


function Contact({data}) {
  


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
          
            <ContactItem datum={datum} key={index}/>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Contact;
