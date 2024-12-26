import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function todo() {
  let style = { width: "80px", paddingLeft: "20px", margin: "20px" };
  let [task, setTask] = useState([]);
  let [input, setInput] = useState("");
  function updateInput(event) {
    setInput(event.target.value);
  }
  function deleteTodod(id) {
    setTask((prevTodo) => prevTodo.filter((singleTodo) => singleTodo.id != id));
  }
  function doneAll() {
    setTask((prev) => {
      return prev.map((element) => {
        return { ...element, done: true };
      });
    });
  }
  function done(id) {
    setTask((prev) => {
      return prev.map((elm) => {
        if (elm.id === id) {
          return { ...elm, done: true };
        } else {
          return elm;
        }
      });
    });
  }
  function updateTask() {
    if (input.trim() !== "") {
      setTask((prev) => {
        if (prev.some((todo) => todo === input)) {
          alert("Task already exist");
          return prev;
        }
        return [...prev, { todo: input, id: uuidv4(), done: false }];
      });
      setInput("");
    }
  }

  let deleting = {
    backgroundColor: "red",
    color: "white",
    marginLeft: "20px",
    width: "70px",
    borderRadius: "7px",
    marginLeft: "8px",
  };
  return (
    <>
      <h2>YOUR TODO!!</h2>
      <input
        type="text"
        value={input}
        placeholder="type here"
        onChange={updateInput}
      />
      <span>
        <button style={style} onClick={updateTask}>
          Add
        </button>
        <ul>
          {task.map((element) => {
            return (
              <li
                key={element.id}
                style={{
                  paddingTop: "10px",
                  textDecoration: element.done ? "line-through" : "none",
                }}
              >
                {element.todo}
                <button
                  style={deleting}
                  onClick={() => deleteTodod(element.id)}
                >
                  Delete
                </button>
                <button onClick={() => done(element.id)}>Done</button>
              </li>
            );
          })}
        </ul>
        <button onClick={doneAll}>Done all</button>
      </span>
    </>
  );
}
