import Form from "./components/Forms";
import Table from "./components/Table";
import Filter from "./components/Filter";
import { useState } from "react";

import { TodoIF } from "./types/interface"
import { ToastContainer } from "react-toastify";


function App() {
  const [newTodo, setNewTodo] = useState<string>("");
  const [filter, setFilter] = useState<string>("All");
  const [todos, setTodos] = useState<TodoIF[]>([]);

  const filteredTodos = todos.filter(todo => {
    if (filter === "All") return true;
    if (filter === "Pending") return !todo.completed
    if (filter === "Completed") return todo.completed
    return true;
  })

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-indigo-900 via-purple-500 to-blue-500 p-8 pt-30">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-6">
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">My Todo Lists</h1>
        </div>

        <Form
          todos={todos}
          setTodos={setTodos}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
        />

        <Filter
          filter={filter}
          setFilter={setFilter}
          filteredCount={filteredTodos.length}
        />

        <Table
          todos={todos}
          setTodos={setTodos}
          filter={filter}
        />
      </div>

      <ToastContainer />
    </div>
  )
}

export default App;
