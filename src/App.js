import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Contact from "./components/contact/listview/Contact";

import { useState } from "react";
import { Button } from "react-bootstrap";
import ContactCard from "./components/contact/cardview/ContactCard";

function App() {
  const [displayToggle, setDisplayToggle] = useState(true);
  

  const toggle =(e)=>{
    setDisplayToggle(!displayToggle)
  }

  return (
    <div className="App">
      <NavBar />
      <div className="container">
        <Button class="btn btn-success float-right mb-5" type="submit" onClick={toggle}>
          ChangeView
        </Button>
      {displayToggle?<Contact /> : <ContactCard/>}  
      </div>
    </div>
  );
}

export default App;
