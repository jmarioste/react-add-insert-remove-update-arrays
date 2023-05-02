import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed?: boolean;
};

const RemoveItemExample = () => {
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

  const removeTodo = (idToRemove: number) => {
    // filter only the todos that doesn't have the id we want to remove
    const updatedArray = todos.filter((todo) => {
      return todo.id !== idToRemove;
    });

    setTodos(updatedArray);
  };

  return (
    <div className="p-10">
      {todos.map((todo, i) => {
        return (
          <div key={todo.id} className="flex gap-2 items-center">
            <p className="p-2">
              {i}.) {todo.title} - {todo.completed ? "Completed" : ""}
            </p>
            <button
              className="bg-red-300 p-2"
              onClick={() => removeTodo(todo.id)}
            >
              (x)
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RemoveItemExample;
