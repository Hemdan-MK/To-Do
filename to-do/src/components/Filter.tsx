import { FilterProps } from "../types/interface"
import { Filter as FilterIcon } from "lucide-react";

export default function Filter({ filter, setFilter, filteredCount }: FilterProps) {
    return (
        <div className="flex justify-between items-center mb-4">
            <div className="flex items-center gap-2">
                <FilterIcon size={18} className="text-gray-500" />
                <select
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    className="border border-gray-200 rounded-lg px-2 py-1"
                >
                    <option>All</option>
                    <option>Pending</option>
                    <option>Completed</option>
                </select>
                <p>{filteredCount}</p>
            </div>
        </div>
    );
};
