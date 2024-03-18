import React, { useState } from "react";
import bookContext from "./Bookcontext";
const BookContextProvider = ({ children }) => {
 const [count, setCount] = useState(0);
  const [open, setOpen] =useState(false)

  const increment=()=>{
    setCount(prev => prev +1)
  }
  const decrrement=()=>{
    setCount(prev => prev +1)
  }



  return (
    <div>
      <bookContext.Provider value={{ count,setCount,setOpen ,open,increment,decrrement}}>
        {children}
      </bookContext.Provider>
    </div>

    // <div>BookContextProvider</div>
  );
};

export default BookContextProvider;
