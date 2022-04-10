import React, { useState } from "react";
import { Button } from "react-bootstrap";

function AddContactForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const createContact = (e) =>{
    e.preventDefault();
    console.log(name)
  }


  return (
    <div className="card border-0 shadow m-5">
      <div className="card-header ">Add a contact</div>
      <div className="card-body ">
        <form onSubmit={(e)=>createContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="tnumberext"
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>
          <Button className="bg-success" type="submit">Submit</Button>
        </form>
      </div>
    </div>
  );
}

export default AddContactForm;
