import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import LoaderSpinner from "./components/LoaderSpinner";
import Home from "./components/Home";

const PAGE_NUMBER = 1;

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      console.log("at the bottom");
      setIsLoading(true);
      setPage(page + 1);
    }
  };
  useEffect(() => {
    const url = "https://randomuser.me/api/?results=25";
    const getItems = async () => {
      const result = await axios(url);
      setData((oldData) => [...oldData, ...result.data.results]);
      setIsLoading(false);
    };
    window.addEventListener("scroll", handleScroll);
    getItems();
  }, [page]);

  

  return (
    <div className="App">
      <NavBar />
      {isLoading ? <LoaderSpinner /> : <Home data={data} />}

    </div>
  );
}

export default App;
