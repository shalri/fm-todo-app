"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { cn } from "@/lib/utils";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    if (typeof localStorage !== "undefined") {
      const savedTodos = localStorage.getItem("todos");
      return savedTodos ? JSON.parse(savedTodos) : [];
    } else {
      console.log("Web storage not supported in this environment.");
    }
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // useEffect(() => {
  //   const savedTodos = localStorage.getItem("todos");
  //   if (savedTodos) {
  //     setTodos(JSON.parse(savedTodos));
  //   }
  // }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = (event: FormEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        text: inputValue,
        completed: false,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };
  const handleToggleComplete = (id: number) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodos(newTodos);
  };
  const handleDeleteTodo = (id: number) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };
  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Enter") {
      handleAddTodo(event);
    }
  };
  const handleFilterChange = (filter: "all" | "active" | "completed") => {
    setFilter(filter);
  };
  const filteredTodos = todos
    ? todos.filter((todo) => {
        if (filter === "all") return true;
        if (filter === "active") return !todo.completed;
        if (filter === "completed") return todo.completed;
      })
    : [];
  return (
    <main className="flex w-full flex-col items-center justify-center px-6 text-center">
      <form className="flex w-full items-center rounded-md bg-white pl-5 dark:bg-tdd-very-dark-grayish-blue-dark-theme">
        <span className="h-5 w-5 rounded-full border-2 border-tdl-very-light-grayish-blue dark:border-tdd-dark-grayish-blue-dark-theme"></span>
        <input
          id="new-todo"
          type="text"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          onKeyDown={handleInputKeyPress}
          placeholder="Create a new todo and press 'Enter'"
          className="w-full rounded-md bg-transparent px-4 py-4 text-xs"
        />
        {/* <button onClick={handleAddTodo} class> */}
        {/*   + */}
        {/* </button> */}
      </form>
      <ul className="mt-4 w-full overflow-hidden rounded-md bg-white dark:bg-tdd-very-dark-grayish-blue-dark-theme">
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={() => handleToggleComplete(todo.id)}
            onDelete={() => handleDeleteTodo(todo.id)}
          />
        ))}
      </ul>
      <div className="flex gap-x-8">
        <button
          onClick={() => handleFilterChange("all")}
          className={cn("bg-blue-200", filter === "all" ? "bg-blue-600" : "")}
        >
          All
        </button>
        <button
          onClick={() => handleFilterChange("active")}
          className={cn(
            "bg-blue-200",
            filter === "active" ? "bg-blue-600" : "",
          )}
        >
          Active
        </button>
        <button
          onClick={() => handleFilterChange("completed")}
          className={cn(
            "bg-blue-200",
            filter === "completed" ? "bg-blue-600" : "",
          )}
        >
          completed
        </button>
      </div>
    </main>
  );
}
