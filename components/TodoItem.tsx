import { cn } from "@/lib/utils";

interface TodoItemsProps {
  todo: {
    text: string;
    completed: boolean;
  };
  onToggleComplete: () => void;
  onDelete: () => void;
}
export default function TodoItem({
  todo,
  onToggleComplete,
  onDelete,
}: TodoItemsProps) {
  return (
    <li>
      <span
        onClick={onToggleComplete}
        className={cn("cursor-pointer", todo.completed ? "line-through" : "")}
      >
        {todo.text}
      </span>
      <button onClick={onDelete}>X</button>
    </li>
  );
}
