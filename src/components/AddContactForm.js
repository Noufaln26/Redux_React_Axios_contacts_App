import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../store";
import shortid from "shortid";


function AddContactForm() {

  const dispatch=useDispatch();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const createContact = (e) =>{
    e.preventDefault();
    const new_contact={
      id:shortid.generate(),
      name:name,
      gender:gender,
      email: email,
      phone:phone,
      date:date
      
    }
    //console.log(new_contact) new contact details from form
    //Todo : validations
    dispatch(addContact(new_contact))
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
