import React, { useState } from "react";
import TodoForm from "../components/Todos/TodoForm";
import TodoList from "../components/Todos/TodoList";

const TodoPage = () => {
  const [currentTodo, setCurrentTodo] = useState(null);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-purple-100 p-4">
    <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl space-y-6">
      <TodoForm currentTodo={currentTodo} setCurrentTodo={setCurrentTodo} />
      </div>
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-2xl space-y-6 mt-9">
      <TodoList setCurrentTodo={setCurrentTodo} />
    </div>
  </div>
  
  );
};

export default TodoPage;
