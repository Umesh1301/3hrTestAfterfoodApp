import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import bookContext from "../context/Bookcontext";

const FrontPage = () => {
  const navigate = useNavigate();
  const { count, setCount, setOpen, open,increment,decrrement } = useContext(bookContext);

  const addplus1 = () => {
    setCount((prev) => prev + 1);
  };

  const submitHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setOpen(true); // Set open to true when the form is submitted
    navigate("/add-new-notes"); // Navigate to the add new notes page after form submission
  };

  return (
    <div >
      <form onSubmit={submitHandler} style={{display:'flex',flexDirection:'column'}}>
        <label>Search Notes:</label>
        <input type="text"></input>
        {/* You can add more form inputs here if needed */}
        <button
          type="submit"
          style={{ backgroundColor: "green", color: "white", border: "5px",marginTop:"10px" }}
          onClick={increment}
        >
          Add New Notes
        </button>
      </form>
      <div>Total Notes: {count}</div>
      <div>Showing: {count}</div>
      {/* You might display more information here */}
    </div>
  );
};

export default FrontPage;
