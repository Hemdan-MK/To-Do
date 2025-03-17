import { FormEvent, useRef } from "react";
import { FormProps } from "../types/interface"
import { toast } from "react-toastify";


export default function Form({
    newTodo,
    setNewTodo,
    setTodos,
    todos
}: FormProps) {

    const inputRef = useRef<HTMLInputElement | null>(null)
    const addTodo = (e: FormEvent): void => {
        e.preventDefault()

        if (!newTodo.trim()) {
            inputRef.current?.focus();
        } else if (todos.some(todo => todo.text === newTodo)) {
            toast.error("This Task Already Exists", {
                position: "bottom-right",
                autoClose: 4000
            })
        } else {
            setTodos([...todos, {
                id: Date.now().toString(),
                text: newTodo,
                completed: false,
                date: new Date()
            }])
        }

        setNewTodo("")
    }
    return (
        <form onSubmit={addTodo} className="flex flex-col gap-2 mb-6">
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                ref={inputRef}
                placeholder="Enter New Task ..."
                className="border p-2 rounded"
            />

            <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
            >
                Add Task
            </button>
        </form>
    );
}
