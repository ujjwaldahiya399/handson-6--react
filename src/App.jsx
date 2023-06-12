/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Students from "./Components/Students";
import Contact from "./Components/Contact";
import Context from "./Components/ContextData";
import Table from "./Components/Table";
import AddNewStudent from "./Components/AddNewStudent";
import EditStudentDetails from "./Components/EditStudentDetails";
function App() {
  let [initialData, setInitialData] = useState([
    { name: "Ujjwal", age: 22, course: "fullStack", batch: "EA22" },
    { name: "Vishal", age: 21, course: "backend", batch: "EA21" },
    { name: "shal", age: 21, course: "frontend", batch: "EA21" },
    { name: "vihaka", age: 21, course: "AWS", batch: "EA21" },
  ]);
  return (
    <div className="App">
      <div className="linkDiv">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/students">
          Students
        </Link>
        <Link className="link" to="/Contact">
          Contact Us
        </Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/students"
          element={
            <Context.Provider
              value={{
                enteries: initialData,
                updateInitialData: setInitialData,
              }}
            >
              <Table />
            </Context.Provider>
          }
        />

        <Route
          path="/addNew"
          element={
            <Context.Provider
              value={{
                enteries: initialData,
                updateInitialData: setInitialData,
              }}
            >
              <AddNewStudent />
            </Context.Provider>
          }
        />

        <Route
          path="/editStudent"
          element={
            <Context.Provider
              value={{
                enteries: initialData,
                updateInitialData: setInitialData,
              }}
            >
              <EditStudentDetails />
            </Context.Provider>
          }
        />

        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
