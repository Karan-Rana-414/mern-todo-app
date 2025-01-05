import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos, deleteTodo } from "../../redux/todos/todosSlice";

const TodoList = ({ setCurrentTodo }) => {
  const dispatch = useDispatch();
  const { todos, loading, error } = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Todo List</h2>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-4">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="bg-white border border-gray-200 p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <h3 className="font-semibold text-lg">{todo.name}</h3>
                <p className="text-gray-600">{todo.description}</p>
              </div>
              <div className="space-x-2">
                <button
                  onClick={() => setCurrentTodo(todo)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTodo(todo._id))}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;
