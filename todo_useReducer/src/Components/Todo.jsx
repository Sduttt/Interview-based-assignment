import { useReducer, useState } from "react";

// Define the reducer function that handles the state updates
const reducer = (state, action) => {
  switch (action.type) {
    // Add a new todo to the state
    case "ADD":
      return [...state, { id: Date.now(), title: action.title, complete: false }];
    // Toggle the complete status of a todo by its id
    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });
    // Delete a todo by its id
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    // Return the default state if no action matches
    default:
      return state;
  }
};

function Todos() {
  // Use useReducer hook to manage the todos state
  const [todos, dispatch] = useReducer(reducer, []);

  // Define a local state for the input value
  const [value, setValue] = useState("");

  // Handle the input change event
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  // Handle the form submit event
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dispatch the ADD_TODO action to the reducer
   if(value.trim()){
     dispatch({ type: "ADD", title: value });
   }
   // Check if the input is empty
   else {
        alert("Please enter a valid todo");
    }

    // Reset the input value
    setValue("");

  };

  // Handle the click event of the toggle button
  const handleToggle = (todo) => {
    // Dispatch a TOGGLE action with the todo id
    dispatch({ type: "TOGGLE", id: todo.id });
  };

  // Handle the click event of the delete button
  const handleDelete = (todo) => {
    // Dispatch a DELETE action with the todo id
    dispatch({ type: "DELETE", id: todo.id });
  };

  return (
    <div>
      <h1>Todos</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => handleToggle(todo)}>
              {todo.complete ? "Mark Incomplete" : "Mark Completed"}
            </button>
            <button onClick={() => handleDelete(todo)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;