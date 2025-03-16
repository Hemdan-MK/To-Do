import Button from "./Button";

export default function Form({
  item,
  setNewItem,
  description,
  setDescription,
  addTask,
}) {
  return (
    <form onSubmit={addTask} className="flex space-x-2">
      <input
        type="text"
        value={item}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter a task..."
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter task description (optional)..."
        className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>

      <Button type={"add"}></Button>
    </form>
  );
}
