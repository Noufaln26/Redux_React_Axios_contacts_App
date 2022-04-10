import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Contact from "./components/contact/listview/Contact";
import { useState, useEffect, useRef } from "react";
import { Button, Form, Row } from "react-bootstrap";
import ContactCard from "./components/contact/cardview/ContactCard";
import axios from "axios";
import LoaderSpinner from "./components/LoaderSpinner";

const PAGE_NUMBER = 1;

function App() {
  const [displayToggle, setDisplayToggle] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page, setPage] = useState(PAGE_NUMBER);
  const [q, setQ] = useState("");
  const [filterOptions, setFilterOptions] = useState(["first", "last"]);

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
    const getItems = async () => {
      const result = await axios("https://randomuser.me/api/?results=25");
      setData((old) => [...old, ...result.data.results]);
      setIsLoading(false);
    };
    window.addEventListener("scroll", handleScroll);
    getItems();
  }, [page]);

  const toggle = (e) => {
    setDisplayToggle(!displayToggle);
  };
  const columns = data[0] && Object.keys(data[0]);

  const customSearch = (rows) => {
    console.log(rows);

    return rows.filter((row) =>
      columns.some(
        (column) =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    );
  };

  return (
    <div className="App">
      <NavBar />

      {isLoading ? (
        <LoaderSpinner />
      ) : (
        <div className="container">
          <div className=" col">
            <input
              type="text"
              className="form-control "
              placeholder="Search text"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />

            {columns &&
              columns.map((column) => (
                <label>
                  {" "}
                  {column}
                  <input
                    type="checkbox"
                    checked={filterOptions.includes(column)}
                    onChange={(e) => {
                      const checked = filterOptions.includes(column);
                      setFilterOptions((prev) =>
                        checked
                          ? prev.filter((s) => s !== column)
                          : [...prev, column]
                      );
                    }}
                  />
                </label>
              ))}
            <Button
              className="btn float-right btn-success mb-3 "
              type="submit"
              onClick={toggle}
            >
              ChangeView
            </Button>
          </div>

          {displayToggle ? (
            <Contact data={customSearch(data)} />
          ) : (
            <ContactCard data={customSearch(data)} />
          )}
        </div>
      )}
    </div>
  );
}

export default App;
