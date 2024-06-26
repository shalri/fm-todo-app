import { Todo } from "@/lib/types";

interface ClearCompletedTodoProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export default function ClearCompletedTodos({
  todos,
  setTodos,
}: ClearCompletedTodoProps) {
  const handleDeleteAllCompleted = () => {
    const remainingTodos = todos.filter((todo) => !todo.completed);
    setTodos(remainingTodos);
  };
  return (
    <div
      className="transition-color cursor-pointer text-xs text-tdd-dark-grayish-blue-dark-theme duration-300 hover:text-td-bright-blue sm:text-sm"
      onClick={handleDeleteAllCompleted}
    >
      Clear Completed
    </div>
  );
}
