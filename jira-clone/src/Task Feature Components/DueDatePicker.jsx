import React, { useState } from "react";

const DueDatePicker = ({
  label = "Due Date",
  initialDate = "",
  minDate = "",
  onDateChange,
  required = false,
}) => {
  const [dueDate, setDueDate] = useState(initialDate);
  const [error, setError] = useState("");

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;

    if (!selectedDate) {
      setDueDate("");
      setError(required ? "Please select a due date." : "");
      onDateChange?.("");
      return;
    }

    if (minDate && selectedDate < minDate) {
      setError("Please select a valid date.");
      return;
    }

    setDueDate(selectedDate);
    setError("");

    if (onDateChange) {
      onDateChange(selectedDate);
    }
  };

  return (
    <div className="due-date-picker">
      <label htmlFor="due-date">
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>

      <input
        id="due-date"
        name="dueDate"
        type="date"
        value={dueDate}
        min={minDate}
        onChange={handleDateChange}
        required={required}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? "due-date-error" : undefined}
      />

      {error && (
        <p id="due-date-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default DueDatePicker;