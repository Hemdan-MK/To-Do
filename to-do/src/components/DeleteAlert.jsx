import React from "react";
import { X } from "lucide-react";

const DeleteAlert = ({ closeDeleteAlert, deleteTodo }) => {
  return (
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
  );
};

export default DeleteAlert;