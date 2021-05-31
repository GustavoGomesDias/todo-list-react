import React from 'react';
import PropTypes from 'prop-types';
import { FaEdit, FaWindowClose } from 'react-icons/fa';
import './Tasks.css';

export default function Tasks({ tasks, handleEdit, handleDelete }) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit
              className="edit"
              onClick={(e) => handleEdit(e, index)}
            />
            <FaWindowClose
              onClick={(e) => handleDelete(e, index)}
              className="delete"
            />
          </span>
        </li>
      ))}
    </ul>
  );
}

Tasks.propTypes = {
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
};
