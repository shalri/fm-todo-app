"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { cn } from "@/lib/utils";
import ClearCompletedTodos from "./ClearCompletedTodos";
import type { Todo } from "@/lib/types";
import TotalActiveTodos from "./TotalActiveTodos";
import FilterButtons from "./FilterButtons";

export default function Todo() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      console.log("Loaded todos from localStorage:", JSON.parse(savedTodos));
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    console.log("Saving todos to localStorage:", todos);
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAddTodo = (event: FormEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      const newTodo: Todo = {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 1,
        text: inputValue,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
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

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "active") return !todo.completed;
    if (filter === "completed") return todo.completed;
  });

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
      <TotalActiveTodos todos={todos} />
      <ClearCompletedTodos todos={todos} setTodos={setTodos} />
      <FilterButtons filter={filter} onFilterChange={handleFilterChange} />
    </main>
  );
}
