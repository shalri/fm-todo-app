import { cn } from "@/lib/utils";
import Image from "next/image";
import { Reorder } from "framer-motion";
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
    <li className="flex h-[53px] w-full items-center justify-between border-b border-tdl-very-light-grayish-blue bg-white px-5 text-xs active:bg-tdd-light-grayish-blue-hover sm:h-[65px] sm:text-base dark:border-b-tdd-very-dark-grayish-blue dark:bg-tdd-very-dark-grayish-blue-dark-theme dark:active:bg-tdd-dark-grayish-blue-dark-theme">
      <div className="flex items-center">
        <div
          onClick={onToggleComplete}
          className={cn(
            "flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 sm:h-7 sm:w-7 dark:border-tdd-very-dark-grayish-blue",
            todo.completed ? "check-bg" : "",
          )}
        >
          {todo.completed && (
            <Image
              src="./images/icon-check.svg"
              alt="check"
              height={10}
              width={10}
            />
          )}
        </div>
        <span
          onClick={onToggleComplete}
          className={cn(
            "inline-block cursor-pointer pl-3 text-tdl-very-dark-grayish-blue sm:pl-6 dark:text-tdd-light-grayish-blue-dark-theme",
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
