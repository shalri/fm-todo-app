import { cn } from "@/lib/utils";

interface FilterButtonsProps {
  filter: "all" | "active" | "completed";
  onFilterChange: (filter: "all" | "active" | "completed") => void;
}

export default function FilterButtons({
  filter,
  onFilterChange,
}: FilterButtonsProps) {
  const filterValues: Array<"all" | "active" | "completed"> = [
    "all",
    "active",
    "completed",
  ];
  return (
    <div className="flex gap-x-4 sm:gap-x-4">
      {filterValues.map((filterValue) => (
        <button
          key={filterValue}
          onClick={() => onFilterChange(filterValue)}
          className={cn(
            "transtion-colors text-sm font-bold text-tdd-dark-grayish-blue-dark-theme duration-300 hover:text-tdd-very-dark-grayish-blue-dark-theme sm:text-[0.85rem]",
            filter === filterValue ? "text-td-bright-blue" : "",
          )}
        >
          {filterValue.charAt(0).toUpperCase() + filterValue.slice(1)}
        </button>
      ))}
    </div>
  );
}
