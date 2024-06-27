import { cn } from "@/lib/utils";

interface FilterButtonsProps {}

export default function FilterButtons() {
  return (
    <div className="flex gap-x-8">
      <button
        onClick={() => handleFilterChange("all")}
        className={cn("bg-blue-200", filter === "all" ? "bg-blue-600" : "")}
      >
        All
      </button>
      <button
        onClick={() => handleFilterChange("active")}
        className={cn("bg-blue-200", filter === "active" ? "bg-blue-600" : "")}
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
        Completed
      </button>
    </div>
  );
}
