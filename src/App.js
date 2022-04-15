import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import { useState, useEffect} from "react";
import axios from "axios";
import LoaderSpinner from "./components/LoaderSpinner";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import AddContactForm from "./components/AddContactForm";
import { Provider } from "react-redux";
import store from "./store";
import { mockjson } from "./assets/Mockjson";
//import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


const PAGE_NUMBER = 1;

function App() {
  
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  //const dispatch=useDispatch();

  const handleScroll = (e) => {
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      console.log("Adding more data to the view")
      setIsLoading(true);
      setPage(page + 1);
    }
  };
  useEffect(() => {
    //console.log(dispatch(fetchContact))

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
    //Adding redux store to all child components
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
