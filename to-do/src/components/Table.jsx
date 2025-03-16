export default function Table({ tasks }) {
  return (
    <ul className="mt-4">
      {tasks.map((val, index) => (
        <li
          //   key={index}
          className="bg-gray-200 p-2 rounded-lg mt-2 flex justify-between"
        >
          {val}
          <button
            // onClick={() => setTasks(tasks.filter((_, i) => i !== index))}
            className="text-red-500 font-bold hover:text-red-700"
          >
            ✖
          </button>
        </li>
      ))}
    </ul>
  );
}
