import { Todo } from "@/lib/types";

interface TotalActiveTodosProps {
  todos: Todo[];
}

export default function TotalActiveTodos({ todos }: TotalActiveTodosProps) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  return (
    <div className="text-xs text-tdd-dark-grayish-blue-dark-theme sm:text-sm">
      {activeTodos.length} Items left
    </div>
  );
}
