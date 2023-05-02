import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed?: boolean;
};

const UpdateItemExample = () => {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: "Todo1",
      completed: true,
    },
    {
      id: 2,
      title: "Todo2",
    },
  ]);

  const updateTodo = (updatedTodo: Todo) => {
    // map over the todos
    const updatedArray = todos.map((todo) => {
      // return the updated todo when we find the same id
      if (updatedTodo.id === todo.id) {
        return updatedTodo;
      }

      return todo;
    });

    setTodos(updatedArray);
  };

  return (
    <div className="p-10">
      {todos.map((todo, i) => {
        return (
          <p key={todo.id} className="p-2">
            {i}.) {todo.title} - {todo.completed ? "Completed" : ""}
          </p>
        );
      })}

      <button
        className="p-2 bg-indigo-500 text-white"
        onClick={() => {
          updateTodo({
            id: 2,
            title: "Updated Todo 3",
            completed: true,
          });
        }}
      >
        Update Todo
      </button>
    </div>
  );
};

export default UpdateItemExample;
