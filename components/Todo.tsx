"use client";
import { ChangeEvent, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { cn } from "@/lib/utils";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAddTodo = () => {
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
  const handleInputKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  const handleFilterChange = (filter: "all" | "active" | "completed") => {
    setFilter(filter);
  };
  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <input
        type="text"
        value={inputValue}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
        onKeyDown={handleInputKeyPress}
      />
      <button onClick={handleAddTodo}>+</button>
      <ul>
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
    </div>
  );
}
