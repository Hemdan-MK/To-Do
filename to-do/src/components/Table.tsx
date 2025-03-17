import { useState } from "react";
import { TableProps } from "../types/interface"
import { toast } from "react-toastify";
import { Calendar, Edit, Trash2, X } from "lucide-react";
import { formatDistanceToNow } from "date-fns";



export default function Table({ todos, setTodos, filter }: TableProps) {
    const [editTodoId, setEditTodoId] = useState<string | null>(null);
    const [editTodoText, setEditTodoText] = useState<string>("");
    const [showDeleteAlert, setShowDeleteAlert] = useState<boolean>(false);
    const [todoToDelete, setTodoToDelete] = useState<string | null>(null);

    const filteredTodos = todos.filter((todo) => {
        if (filter === "All") return true;
        if (filter === "Pending") return !todo.completed;
        if (filter === "Completed") return todo.completed;
        return true;
    });

    const reversedTodos = [...filteredTodos].reverse();

    const openDeleteAlert = (id: string) => {
        setTodoToDelete(id);
        setShowDeleteAlert(true);
    };

    const closeDeleteAlert = () => {
        setTodoToDelete(null);
        setShowDeleteAlert(false);
    };

    const deleteTodo = (): void => {
        if (todoToDelete) {
            setTodos((until) => {
                return until.filter(todo => {
                    todo.id !== todoToDelete;
                });
            });

            toast.success("Deleted Successfully ...", {
                position: "bottom-right",
                autoClose: 4000
            })
            closeDeleteAlert();
        }
    }

    const statusChange = (id: string): void => {
        setTodos((until) => {
            return until.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        })
    }

    const editTodo = (id: string, text: string): void => {
        setEditTodoId(id);
        setEditTodoText(text)
    }

    const saveEdit = () => {
        const check = todos.some(todo => {
            return todo.text === editTodoText && todo.id === editTodoId
        })
        if (check) {
            toast.error("This todo already exists", {
                position: "bottom-right",
                autoClose: 4000,
            });
        } else {
            setTodos((prev) => {
                return prev.map((todo) => {
                    return todo.id === editTodoId ? { ...todo, text: editTodoText } : todo;
                });
            });
        }
        setEditTodoId(null)
        setEditTodoText("")
    }


    return (
        <>
            <div className="space-y-3">
                {reversedTodos.length === 0 ? (
                    <div className="flex items-center justify-center mt-10 mb-10">
                        <p>No todos yet!</p>
                    </div>
                ) : (
                    [...reversedTodos.map((todo) => (
                        !todo.completed && (
                            <div
                                key={todo.id}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => {
                                            statusChange(todo.id);
                                        }}
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
                                            className={`${todo.completed
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
                                            onClick={() => saveEdit()}
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
                                                onClick={() => editTodo(todo.id, todo.text)}
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
                        )

                    )),
                    ...reversedTodos.map((todo) => (
                        todo.completed && (
                            <div
                                key={todo.id}
                                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                            >
                                <div className="flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={todo.completed}
                                        onChange={() => {
                                            statusChange(todo.id);
                                        }}
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
                                            className={`${todo.completed
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
                                            onClick={() => saveEdit()}
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
                                                onClick={() => editTodo(todo.id, todo.text)}
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
                        )

                    ))]
                )}
            </div>

            {showDeleteAlert && (
                <div className="fixed inset-0 backdrop-blur-sm bg-white/30 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 relative shadow-lg">
                        <button
                            onClick={closeDeleteAlert}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <X size={20} />
                        </button>

                        <div className="mb-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                                Delete Todo
                            </h3>
                            <p className="text-gray-600">
                                Are you sure you want to delete this todo? This action cannot be
                                undone.
                            </p>
                        </div>

                        <div className="flex justify-end gap-3">
                            <button
                                onClick={closeDeleteAlert}
                                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={deleteTodo}
                                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

