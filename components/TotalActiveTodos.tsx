import { Todo } from "@/lib/types";

interface TotalActiveTodosProps {
  todos: Todo[];
}

export default function TotalActiveTodos({ todos }: TotalActiveTodosProps) {
  const activeTodos = todos.filter((todo) => !todo.completed);
  return <div className="text-xs">{activeTodos.length} Items left</div>;
}
