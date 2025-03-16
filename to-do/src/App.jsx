import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./assets/";

// Components
import TodoForm from "./components/TodoForm";
import FilterSelect from "./components/FilterSelect";
import TodoList from "./components/TodoList";
import DeleteAlert from "./components/DeleteAlert";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("All");
  const [editTodoId, setEditTodoId] = useState(null);
  const [editTodoText, setEditTodoText] = useState("");
  const [showDeleteAlert, setShowDeleteAlert] = useState(false);
  const [todoToDelete, setTodoToDelete] = useState(null);

  const addTodo = (e) => {
    e.preventDefault();

    if (!newTodo.trim()) {
    } else if (todos.some((todo) => todo.text === newTodo)) {
      toast.error("This todo already exists", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      setTodos([
        ...todos,
        {
          id: Date.now().toString(),
          text: newTodo,
          completed: false,
          date: new Date(),
        },
      ]);
      setNewTodo("");
    }
  };

  const openDeleteAlert = (id) => {
    setTodoToDelete(id);
    setShowDeleteAlert(true);
  };

  const closeDeleteAlert = () => {
    setTodoToDelete(null);
    setShowDeleteAlert(false);
  };

  const deleteTodo = () => {
    if (todoToDelete) {
      setTodos((prev) => prev.filter((todo) => todo.id !== todoToDelete));
      toast.success("Todo deleted successfully", {
        position: "top-right",
        autoClose: 3000,
      });
      closeDeleteAlert();
    }
  };

  const changeStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const startEditTodo = (id, text) => {
    setEditTodoId(id);
    setEditTodoText(text);
  };

  const saveEditedTodo = (id) => {
    if (todos.some((todo) => todo.text === editTodoText && todo.id !== id)) {
      toast.error("This todo already exists", {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      setTodos((prev) => {
        return prev.map((todo) => {
          return todo.id === id ? { ...todo, text: editTodoText } : todo;
        });
      });
      setEditTodoId(null);
      setEditTodoText("");
    }
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "All") return true;
    if (filter === "Pending") return !todo.completed;
    if (filter === "Completed") return todo.completed;
    return true;
  });

  const reversedTodos = [...filteredTodos].reverse();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 to-blue-700 p-8 pt-30">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Todo-s</h1>
        </div>

        <TodoForm newTodo={newTodo} setNewTodo={setNewTodo} addTodo={addTodo} />

        <FilterSelect
          filter={filter}
          setFilter={setFilter}
          todoCount={filteredTodos.length}
        />

        <TodoList
          todos={reversedTodos}
          changeStatus={changeStatus}
          startEditTodo={startEditTodo}
          openDeleteAlert={openDeleteAlert}
          editTodoId={editTodoId}
          editTodoText={editTodoText}
          setEditTodoText={setEditTodoText}
          saveEditedTodo={saveEditedTodo}
        />
      </div>

      {showDeleteAlert && (
        <DeleteAlert
          closeDeleteAlert={closeDeleteAlert}
          deleteTodo={deleteTodo}
        />
      )}

      <ToastContainer />
    </div>
  );
};

export default App;
