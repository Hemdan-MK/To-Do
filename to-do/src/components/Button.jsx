export default function ({ type }) {
  return (
    <>
      {type === "add" && (
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Add</button>
      )}
      {type === "delete" && (
        <button className="text-red-500 font-bold hover:text-red-700">Remove</button>
      )}
      {type === "markAsRead" && (
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Mark as Read</button>
      )}
    </>
  );
}
