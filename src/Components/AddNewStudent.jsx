/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Context from "./ContextData";
import { useNavigate } from "react-router-dom";
import './AddNewStudent.css';
function AddNewStudent() {
  const DataFromContext = useContext(Context);
  const nav = useNavigate();
  const newObj = {
    name: "",
    age: "",
    course: "",
    batch: "",
  };
  const changeHandler = (e) => {
    newObj[e.target.name] = e.target.value;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    DataFromContext.enteries.push(newObj);
    console.log(DataFromContext.enteries)
    nav(-1);
  };
  const cancelBtnHandler = () => {
    nav(-1);
  }
  return (
    <div className="main">
      <div className="uprInpts">
        <input
          name="name"
          onChange={changeHandler}
          type="text"
          placeholder="name"
        />
        <input
          name="age"
          onChange={changeHandler}
          type="number"
          placeholder="age"
        />
      </div>
      <div className="lowerInpt">
        <input
          name="course"
          onChange={changeHandler}
          type="text"
          placeholder="course"
        />
        <input
          name="batch"
          onChange={changeHandler}
          type="text"
          placeholder="batch"
        />
      </div>
      <div className="buttons">
        <button onClick={cancelBtnHandler} className="cancelBtn">Cancel</button>
        <button className="submitBtn" onClick={submitHandler}>Submit</button>
      </div>
    </div>
  );
}

export default AddNewStudent;
