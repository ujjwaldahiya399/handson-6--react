// import React from 'react'
import Context from './ContextData'
import { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import './AddNewStudent.css';
function EditStudentDetails() {
    const DataFromContext = useContext(Context);
    const navigation = useNavigate();
    const dataFromLink = useLocation().state.data;
    console.log(dataFromLink);
    const currentData = {
        name:DataFromContext.enteries[dataFromLink].name,
        age:DataFromContext.enteries[dataFromLink].age,
        course:DataFromContext.enteries[dataFromLink].course,
        batch:DataFromContext.enteries[dataFromLink].batch
    }
    const changeHandler = (e) => {
        currentData[e.target.name] = e.target.value;
    }
    const submitHandler = () => {
        DataFromContext.enteries[dataFromLink] = currentData;
        navigation(-1)
    }
    const cancelBtnHandler = () => {
        navigation(-1)
    }
  return (
    <div className="main">
      <div className="uprInpts">
        <input
          name="name"
          onChange={changeHandler}
          type="text"
          placeholder={DataFromContext.enteries[dataFromLink].name}
        />
        <input
          name="age"
          onChange={changeHandler}
          type="number"
          placeholder={DataFromContext.enteries[dataFromLink].age}
        />
      </div>
      <div className="lowerInpt">
        <input
          name="course"
          onChange={changeHandler}
          type="text"
          placeholder={DataFromContext.enteries[dataFromLink].course}
        />
        <input
          name="batch"
          onChange={changeHandler}
          type="text"
          placeholder={DataFromContext.enteries[dataFromLink].batch}
        />
      </div>
      <div className="buttons">
        <button onClick={cancelBtnHandler} className="cancelBtn">Cancel</button>
        <button className="submitBtn" onClick={submitHandler}>Update</button>
      </div>
    </div>
  )
}

export default EditStudentDetails