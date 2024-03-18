import { Fragment, useContext, useState } from "react";

import "./App.css";
import FrontPage from "./components/FrontPage";
import AddNewNotesForm from "./components/AddNewNotesForm";
import { Route, Routes } from "react-router-dom";
import bookContext from "./context/Bookcontext";

function App() {
  const [count, setCount] = useState(0);
  const { open } = useContext(bookContext); // Destructuring open directly from context

  console.log(open);

  return (
    <Fragment>
     <h3> Note Book</h3>
      <FrontPage />
      {open && <AddNewNotesForm />} {/* Render AddNewNotesForm only if open is true */}
    </Fragment>
  );
}

export default App;
