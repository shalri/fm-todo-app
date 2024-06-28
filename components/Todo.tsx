"use client";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import TodoItem from "./TodoItem";
import { cn, debounce } from "@/lib/utils";
import ClearCompletedTodos from "./ClearCompletedTodos";
import type { Todo } from "@/lib/types";
import TotalActiveTodos from "./TotalActiveTodos";
import FilterButtons from "./FilterButtons";
import { Reorder } from "framer-motion";

export default function Todo() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  useEffect(() => {
    if (todos.length > 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  useEffect(() => {
    const handleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 100);
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
    <main className="mx-auto flex w-full flex-col items-center justify-center px-6 text-center sm:max-w-[588px]">
      <form className="flex w-full items-center rounded-md bg-white pl-5 dark:bg-tdd-very-dark-grayish-blue-dark-theme">
        <span className="h-5 w-5 rounded-full border-2 border-tdl-very-light-grayish-blue sm:h-7 sm:w-7 dark:border-tdd-dark-grayish-blue-dark-theme"></span>
        <input
          id="new-todo"
          type="text"
          value={inputValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          onKeyDown={handleInputKeyPress}
          placeholder="Create a new todo and press 'Enter'"
          className="w-full rounded-md bg-transparent p-4 text-xs sm:h-[64px] sm:p-6 sm:text-base"
        />
      </form>
      <ul
        className={cn(
          "mt-4 w-full cursor-grab overflow-hidden rounded-t-md bg-white active:cursor-grabbing sm:mt-6 dark:bg-tdd-very-dark-grayish-blue-dark-theme",
          filter !== "all" && "cursor-auto active:cursor-auto",
        )}
      >
        {filter === "all" ? (
          <Reorder.Group values={filteredTodos} onReorder={setTodos}>
            {filteredTodos.map((todo) => (
              <Reorder.Item value={todo} key={todo.id}>
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggleComplete={() => handleToggleComplete(todo.id)}
                  onDelete={() => handleDeleteTodo(todo.id)}
                />
              </Reorder.Item>
            ))}
          </Reorder.Group>
        ) : (
          filteredTodos.map((todo) => (
            <li key={todo.id}>
              <TodoItem
                key={todo.id}
                todo={todo}
                onToggleComplete={() => handleToggleComplete(todo.id)}
                onDelete={() => handleDeleteTodo(todo.id)}
              />
            </li>
          ))
        )}
      </ul>
      {windowWidth >= 900 ? (
        <div className="flex h-[48px] w-full items-center justify-between rounded-b-md bg-white px-6 shadow-2xl shadow-zinc-400  dark:bg-tdd-very-dark-grayish-blue-dark-theme dark:shadow-black">
          <FilterButtons filter={filter} onFilterChange={handleFilterChange} />
          <ClearCompletedTodos todos={todos} setTodos={setTodos} />
        </div>
      ) : (
        <div className="w-full">
          <div className="flex h-[53px] w-full items-center justify-between  rounded-b-md bg-white px-5 text-xs text-tdl-very-dark-grayish-blue dark:bg-tdd-very-dark-grayish-blue-dark-theme dark:text-tdd-light-grayish-blue-dark-theme">
            <TotalActiveTodos todos={todos} />
            <ClearCompletedTodos todos={todos} setTodos={setTodos} />
          </div>
          <div className="mt-4 flex h-[48px] w-full items-center justify-center rounded-md bg-white dark:bg-tdd-very-dark-grayish-blue-dark-theme">
            <FilterButtons
              filter={filter}
              onFilterChange={handleFilterChange}
            />
          </div>
        </div>
      )}

      {filter === "all" ? (
        <p className="mt-10 text-[.85rem] text-tdd-dark-grayish-blue-dark-theme sm:mt-12">
          Drag and drop to reorder list
        </p>
      ) : (
        <p className="mt-10 text-[.85rem] text-tdd-dark-grayish-blue-dark-theme sm:mt-12">
          Click &apos;All&apos; for drag and drop feature
        </p>
      )}
    </main>
  );
}
