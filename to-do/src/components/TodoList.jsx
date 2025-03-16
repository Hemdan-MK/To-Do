import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  todos,
  changeStatus,
  startEditTodo,
  openDeleteAlert,
  editTodoId,
  editTodoText,
  setEditTodoText,
  saveEditedTodo
}) => {
  if (todos.length === 0) {
    return (
      <div className="flex items-center justify-center mt-10 mb-10">
        <p>No todos yet!</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          changeStatus={changeStatus}
          startEditTodo={startEditTodo}
          openDeleteAlert={openDeleteAlert}
          editTodoId={editTodoId}
          editTodoText={editTodoText}
          setEditTodoText={setEditTodoText}
          saveEditedTodo={saveEditedTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;