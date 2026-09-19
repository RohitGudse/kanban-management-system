import React from "react";

const TaskModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Task Modal
          </h2>

          <button
            type="button"
            className="text-xl text-gray-500 hover:text-gray-800"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        <p className="text-gray-600">
          This is the task modal content.
        </p>
      </div>
    </div>
  );
};

export default TaskModal;