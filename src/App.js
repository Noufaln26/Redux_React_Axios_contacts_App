import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Contact from "./components/contact/listview/Contact";
import { useState, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";
import ContactCard from "./components/contact/cardview/ContactCard";
import axios from "axios";
import LoaderSpinner from "./components/LoaderSpinner";

const PAGE_NUMBER = 1;

function App() {
  const [displayToggle, setDisplayToggle] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);

  useEffect(() => {
    const getItems = async () => {
      const result = await axios("https://randomuser.me/api/?results=25");
      setData(old=> [...old, ...result.data.results]);
      setIsLoading(false);
    };
    window.addEventListener('scroll',handleScroll)
    getItems();
  }, [page]);

  const handleScroll = (e) =>{
    
    if (window.innerHeight+ e.target.documentElement.scrollTop+1 >= e.target.documentElement.scrollHeight){
      console.log("at the bottom")
      setIsLoading(true);
    }
   setPage(page+1)
  
  }

  const toggle = (e) => {
    setDisplayToggle(!displayToggle);
  };

  return (
    <div className="App">
      <NavBar />

      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <div className="container">
          <Button
            className="btn float-right btn-success mb-3"
            type="submit"
            onClick={toggle}
          >
            ChangeView
          </Button>
          {displayToggle ? (
            <Contact data={data} />
          ) : (
            <ContactCard data={data} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
