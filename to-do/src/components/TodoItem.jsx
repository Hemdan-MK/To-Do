import React from "react";
import { Calendar, Edit, Trash2 } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const TodoItem = ({
  todo,
  changeStatus,
  startEditTodo,
  openDeleteAlert,
  editTodoId,
  editTodoText,
  setEditTodoText,
  saveEditedTodo
}) => {
  return (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => changeStatus(todo.id)}
          className="w-5 h-5 accent-purple-600 rounded"
        />
        {editTodoId && editTodoId === todo.id ? (
          <input
            className="flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500"
            type="text"
            value={editTodoText}
            onChange={(e) => setEditTodoText(e.target.value)}
          />
        ) : (
          <span
            className={`${
              todo.completed
                ? "line-through text-gray-400"
                : "text-gray-700"
            }`}
          >
            {todo.text}
          </span>
        )}
      </div>
      <div className="flex gap-2">
        {editTodoId === todo.id ? (
          <button
            onClick={() => saveEditedTodo(todo.id)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
          >
            Save
          </button>
        ) : (
          <>
            {todo.date && (
              <div className="flex items-center mr-45 gap-2 text-sm text-gray-500">
                <Calendar size={14} />
                {formatDistanceToNow(todo.date)}
              </div>
            )}
            <button
              onClick={() => startEditTodo(todo.id, todo.text)}
              className="px-4 py-2 bg-yellow-400 text-white rounded-lg"
            >
              <Edit size={18} />
            </button>
            <button
              onClick={() => openDeleteAlert(todo.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg"
            >
              <Trash2 size={18} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoItem;