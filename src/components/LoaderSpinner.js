import React from "react";
import { Spinner } from "react-bootstrap";
function LoaderSpinner() {
  return (
    <div
      style={{
        zIndex: 99,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}

export default LoaderSpinner;
