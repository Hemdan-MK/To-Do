import "./index.css";
import Form from "./components/Forms";
import Button from "./components/Button";
import Table from "./components/Table";
import { useState } from "react";

function App() {
  const [item, setNewItem] = useState("");
  const [description, setDescription] = useState("");

  const [tasks, setTask] = useState([]);

  const addTask = (e) => {
    e.preventDefault();

    if (item.trim() === "") return;

    const newTask = {
      id: Date.now().toString(),
      taskName: item,
      date: new Date().toLocaleDateString(),
      markAsDone: false,
      description: description || "",
    };

    setTask([...tasks, newTask]);

    setNewItem("");
    setDescription("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow-lg w-200 ">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          To-Do List
        </h2>

        <Form
          item={item}
          setNewItem={setNewItem}
          description={description} 
          setDescription={setDescription}
          addTask={addTask}
        ></Form>

        <Table tasks={tasks}></Table>
      </div>
    </div>
  );
}

export default App;
