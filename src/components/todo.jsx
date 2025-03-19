import { useState } from "react";
import './todo.css'

function ToDoApp() {
    const [todos, setTodos] = useState([]);
    const [headingInput, setHeadingInput] = useState("");
    const [listInputs, setListInputs] = useState({});
  
    const handleAddTodo = () => {
      if (headingInput.trim() !== "") {
        setTodos([...todos, { heading: headingInput, lists: [] }]);
        setHeadingInput(""); // ✅ Fixed here
      }
    };
  
    const handleDeleteTodo = (index) => {
      const updatedTodos = todos.filter((_, i) => i !== index);
      setTodos(updatedTodos);
    };
  
    const handleListInputChange = (index, value) => {
      setListInputs({ ...listInputs, [index]: value });
    };
  
    const handleList = (index) => {
      if (listInputs[index]?.trim() !== "") {
        const updatedTodos = [...todos];
        updatedTodos[index].lists.push(listInputs[index]);
        setTodos(updatedTodos);
        setListInputs({ ...listInputs, [index]: "" }); // Clear input field
      }
    };
  
    return (
      <>
        <div className="todo-container">
          <h1 className="title">My Todo List</h1>
          <div className="input-container">
            <input
              type="text"
              className="heading-input"
              placeholder="Enter heading"
              value={headingInput}
              onChange={(e) => {
                setHeadingInput(e.target.value);
              }}
            />
            <button className="add-list-button btn" onClick={handleAddTodo}>
              Add Heading
            </button>
          </div>
        </div>
        <div className="todo_main">
          {todos.map((todo, index) => (
            <div key={index} className="todo-card">
              <div className="heading_todo">
                <h3>{todo.heading}</h3>
                <button
                  className="delete-button-heading btn"
                  onClick={() => handleDeleteTodo(index)}
                >
                  Delete Heading
                </button>
              </div>
              <ul>
                {todo.lists.map((list, listIndex) => (
                  <li key={listIndex} className="todo_inside_list">
                    <p>{list}</p>
                  </li>
                ))}
              </ul>
              <div className="add_list">
                <input
                  type="text"
                  className="list-input"
                  placeholder="Add List"
                  value={listInputs[index] || ""}
                  onChange={(e) => handleListInputChange(index, e.target.value)}
                />
                <button
                  className="add-list-button btn"
                  onClick={() => handleList(index)}
                >
                  Add list
                </button>
              </div>
            </div>
          ))}
        </div>
      </>
    );
}
export default ToDoApp;