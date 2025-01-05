import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../../redux/todos/todosSlice";

const TodoForm = ({ currentTodo, setCurrentTodo }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (currentTodo) {
      setName(currentTodo.name);
      setDescription(currentTodo.description);
    } else {
      setName("");
      setDescription("");
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;

    if (currentTodo) {
      dispatch(updateTodo({ id: currentTodo._id, name, description }));
      setCurrentTodo(null)
      .dispatch(fetchTodos());

    } else {
      dispatch(addTodo({ name, description }));
    }

    setName("");
    setDescription("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 bg-purple-50 p-4 rounded-lg shadow-md"
    >
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <textarea
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <div className="flex justify-between">
        <button
          type="submit"
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
        >
          {currentTodo ? "Update Task" : "Add Task"}
        </button>
        {currentTodo && (
          <button
            type="button"
            onClick={() => setCurrentTodo(null)}
            className="bg-gray-300 text-gray-800 py-2 px-4 rounded hover:bg-gray-400"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default TodoForm;
