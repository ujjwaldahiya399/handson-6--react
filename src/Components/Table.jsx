/* eslint-disable no-unused-vars */
import React,{useContext} from "react";
import {useNavigate} from "react-router-dom";
import { Link } from "react-router-dom";
import "./Table.css";
import Context from "./ContextData";
const Table = () => {
    const DataFromContext = useContext(Context)
    const navigate = useNavigate()
  return (
    <div
      style={{
        display: "block",
        justifyContent: "center",
        backgroundColor: "#ffffff",
        width: "80%",
        marginLeft: "9em",
        marginTop: "3em",
      }}
    >
    <div className="div1">
        <h2>Student Details</h2>
        <button className="addStudentBtn" onClick={() => {navigate('/addNew')}}>Add Student</button>
    </div>
    
      <table style={{ width: "100%", marginTop: "0em" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
            {DataFromContext.enteries.map((ele,index) => (
                <tr key={index}>
                    <td>{ele.name}</td>
                    <td>{ele.age} </td>
                    <td> {ele.course}</td>
                    <td> {ele.batch}</td>
                    <td>
                        <Link state={{data:index}} to="/editStudent">edit</Link>
                    </td>
                </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
