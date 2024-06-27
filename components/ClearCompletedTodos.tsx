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
    <div className="text-xs" onClick={handleDeleteAllCompleted}>
      Clear Completed
    </div>
  );
}
