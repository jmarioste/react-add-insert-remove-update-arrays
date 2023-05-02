import React, { useState } from "react";

type Todo = {
  id: number;
  title: string;
  completed?: boolean;
};

const InsertItemExample = () => {
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
    const updatedArray = todos.map((todo) => {
      if (updatedTodo.id === todo.id) {
        return updatedTodo;
      }
      return todo;
    });

    setTodos(updatedArray);
  };
  const insertAfter = (id: number, todo: Todo) => {
    const array = [...todos]; // first, create a copy.
    // find the index of the id
    const index = todos.findIndex((todo) => todo.id === id);

    // use array.splice to insert it at the next index
    array.splice(index + 1, 0, todo);
    // update the state
    setTodos(array);
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
          insertAfter(1, {
            title: "Task 2",
            id: todos.length + 1,
            completed: false,
          });
        }}
      >
        Insert Todo
      </button>
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

export default InsertItemExample;
