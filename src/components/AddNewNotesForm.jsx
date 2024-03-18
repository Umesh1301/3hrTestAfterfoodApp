import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import bookContext from "../context/Bookcontext";

const AddNewNotesForm = () => {
  const navigate = useNavigate();
  const { count ,setCount,setOpen} = useContext(bookContext);
  const submitHandler=()=>{
    setCount(prev => prev +1)
  }

  const Addhandler=()=>{
    setCount(prev => prev +1)
  }
  return (
    <div >
      <form style={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
        <label><h4>Notes Add</h4></label>
        <input></input>
        <label> <h4>Notes Desc:</h4></label>
        <input></input>
        <button style={{backgroundColor:'green',color:'white',marginTop:'10px',marginBottom:'10px'}}>Add to Notes</button>
        <button style={{backgroundColor:'red',color:'white'}}>
          Cancel
        </button>

      </form>
    </div>
  );
};

export default AddNewNotesForm;
