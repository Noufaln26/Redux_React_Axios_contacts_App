import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import LoaderSpinner from "./components/LoaderSpinner";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AddContactForm from "./components/AddContactForm";
import { Provider } from "react-redux";
import store from "./store";

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
    const url = "https://randomuser.me/api/?results=2";
    const getItems = async () => {
      const result = await axios(url);
      setData((oldData) => [...oldData, ...result.data.results]);
      setIsLoading(false);
    };
    window.addEventListener("scroll", handleScroll);
    getItems();
  }, [page]);

  return (
    <Provider store={store}>
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element= {isLoading ? <LoaderSpinner /> : <Home data={data} />} />
        <Route path="/addContact" element={<AddContactForm />} />
      </Routes>
     
    </div>
    </Provider>
  );
}

export default App;
