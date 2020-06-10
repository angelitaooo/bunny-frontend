import React, { useState } from 'react';

const Task = ({ children, done, onBlur }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskName, setNewTaskName] = useState(children);
  const striketrough = done ? 'line-through text-gray-400' : 'text-gray-700';

  function handleOnBlur() {
    setIsEditing(false);
    onBlur(newTaskName);
  }

  return (
    <div className="flex items-center">
      {isEditing ? (
        <div className="relative rounded-md shadow-sm">
          <input
            id="taskName"
            className={`form-input block w-full sm:text-sm sm:leading-5`}
            onBlur={handleOnBlur}
            onChange={(e) => setNewTaskName(e.target.value)}
            placeholder="Update your task - Should not be blank"
            value={newTaskName}
            autoFocus
          />
        </div>
      ) : (
        <div>
          <span
            className={`${striketrough}`}
            onClick={() => setIsEditing(true)}
          >
            {children}
          </span>
        </div>
      )}
    </div>
  );
};

export default Task;
