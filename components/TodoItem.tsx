import { cn } from "@/lib/utils";
import Image from "next/image";

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
    <li className="flex h-[53px] w-full items-center justify-between border-b border-tdl-very-light-grayish-blue px-5 text-xs dark:border-b-tdd-very-dark-grayish-blue">
      <div className="flex items-center">
        <div className="h-5 w-5 rounded-full border-2 dark:border-tdd-very-dark-grayish-blue" />
        <span
          onClick={onToggleComplete}
          className={cn(
            "inline-block cursor-pointer pl-3 text-tdl-very-dark-grayish-blue dark:text-tdd-light-grayish-blue-dark-theme",
            todo.completed
              ? "text-tdd-light-grayish-blue-dark-theme line-through dark:text-tdd-very-dark-grayish-blue"
              : "",
          )}
        >
          {todo.text}
        </span>
      </div>
      <button onClick={onDelete}>
        <Image
          src="/images/icon-cross.svg"
          width={14}
          height={14}
          alt="delete todo"
        />
      </button>
    </li>
  );
}
