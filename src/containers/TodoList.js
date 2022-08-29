import React, { useState } from "react";

const allItems = [
  {
    name: "Apple",
  },
  {
    name: "Banana",
  },
  {
    name: "Mango",
  },
  {
    name: "Chicku",
  },
];

function TodoList() {
  const [data, setData] = useState(allItems);

  const removeItem = (index) => {
    const newData =[...data]
    console.log("data.splice(index, 1)", newData.splice(index, 1))
    console.log("ddata", newData)
    setData(newData);
  };

  return (
    <>
      <div>TodoList</div>
      <hr />
      {data?.map((item, index) => {
        return (
          <div key={index} id={index}>
            <p>{item.name}</p>
            <button type="button" onClick={()=> removeItem(index)}>
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
}

export default TodoList;
