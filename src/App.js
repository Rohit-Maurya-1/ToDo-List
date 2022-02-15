import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (!inputData) {
    } else {
      console.log(setItems([...items, inputData]));
      setInputData("");
    }
  };
  const deleteItem=(id)=>{
  console.log(id)
  const updatedItems=items.filter((elem,ind)=>{
      return ind != id;
    
  });
  setItems(updatedItems)
  }

  return (
    <>
      <div className="first">
        <div className="container">
          <h1>ToDO List</h1>
          <div className="main">
            <input
              type="text"
              className="input"
              placeholder="✍️add item..."
              onChange={(e) => setInputData(e.target.value)}
              value={inputData}
            />
            <i
              className="fa-solid fa-plus add-item"
              title="add item "
              onClick={addItem}
            ></i>
          </div>

          {items.map((elem, ind) => {
            return (
              <div className="btn" key={ind}>
                <h3>{elem}</h3>
                <i
                  className="fa-solid fa-trash-arrow-up add-item1" onClick={()=>deleteItem(ind)}
                  title="del item"
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default App;
