
import React,{useState} from "react";
import { Button } from "react-bootstrap";
import Modal from "./Modal";
function AddContactForm() {

    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [date, setDate] = useState("")

    const [show, setShow] = useState(false)

    const handleClick=()=>{
        setShow(!show)

    }




  return (
    <div className="card border-0 shadow m-5">
      <div className="card-header ">Add a contact</div>
      <div className="card-body ">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              value={name}
              onChange={(e)=>setName(name)}
            />
          </div>
          <div className="form-group">
            <input
              type="tnumberext"
              className="form-control"
              placeholder="Enter phone number"
              value={phone}
              onChange={(e)=>setPhone(phone)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
              value={email}
              onChange={(e)=>setEmail(email)}
            />
          </div>
          <div className="form-group">
            <input
              type="date"
              className="form-control"
              value={date}
              onChange={(e)=>setDate(setDate)}
              
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="gender"
              value={gender}
              onChange={(e)=>setGender(gender)}
            />
          </div>
          <Button className="bg-success" onClick={handleClick}>
              Submit
          </Button>
        </form>
        
      </div>
    </div>
  );
}

export default AddContactForm;
