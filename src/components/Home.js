import React from "react";
import {useState} from 'react';
import ContactCard from "./contact/cardview/ContactCard";
import Contact from "./contact/listview/Contact";
import { Button, Form, Row } from "react-bootstrap";

function Home({data}) {
  const [displayToggle, setDisplayToggle] = useState(true);
  const [q, setQ] = useState("");
  const [filterOptions, setFilterOptions] = useState([]);

  //const columns = data[0] && Object.keys(data[0]);
  const columns=["gender","name","email"] //selected filters

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
            <label className="px-3 mb-5">
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
              />{" "}
              {column}
             
              
            </label>
             
          ))}
         <span className="text-danger">{filterOptions.length} : Applied filters</span> 
         {/*toggling the card/listview*/}
        <Button
          className="btn float-right btn-success mt-1 "
          type="submit"
          onClick={(e)=>setDisplayToggle(!displayToggle)}
        >
          ChangeView
        </Button>
      </div>
        {/*Conditional rendering*/}
      {displayToggle ? (
        <Contact data={customSearch(data)} />
      ) : (
        <ContactCard data={customSearch(data)} />
      )}
    </div>
  );
}

export default Home;
