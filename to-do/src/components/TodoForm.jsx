import React, { useRef } from "react";
import { Plus } from "lucide-react";

const TodoForm = ({ newTodo, setNewTodo, addTodo }) => {
  const inputRef = useRef(null);

  return (
    <form className="flex gap-2 mb-6" onSubmit={addTodo}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        ref={inputRef}
        placeholder="Add new..."
        className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-purple-600 text-white rounded-lg flex items-center gap-2"
      >
        <Plus size={18} />
        Add
      </button>
    </form>
  );
};

export default TodoForm;