import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { addToDo, markToDo } from '../../actions/TodoActions';

function ToDoApp() {
  const dispatch = useDispatch();
  const [toDoText, setToDoText] = React.useState('');
  const ToDoItems = useSelector((state) => state.ToDo.items);

  const handleAddToDo = () => {
    dispatch(addToDo(toDoText));
    setToDoText('');
  };

  const handleMarkToDo = (toDo, value) => {
    dispatch(markToDo(toDo, value));
  };
  return (
    <div>
      <h2>ToDo App</h2>
      <p>Add a new todo to the list</p>
      <div>
        <input
          type="text"
          id="addTodoText"
          value={toDoText}
          onChange={(e) => setToDoText(e.target.value)}
        />
        <button type="button" onClick={handleAddToDo}>
          Add
        </button>
      </div>
      <p>ToDo(s) List:</p>
      <ol>
        {ToDoItems.filter((toDo) => toDo.done === false).map((toDo) => (
          <li>
            <input
              type="checkbox"
              key={toDo.id}
              checked={toDo.done}
              onChange={(e) => handleMarkToDo(toDo, e.target.checked)}
            />
            <span>{toDo.text}</span>
          </li>
        ))}
      </ol>
      <p>ToDo(s) List (Completed):</p>
      <ol>
        {ToDoItems.filter((toDo) => toDo.done).map((toDo) => (
          <li>
            <input
              type="checkbox"
              key={toDo.id}
              checked={toDo.done}
              onChange={(e) => handleMarkToDo(toDo, e.target.checked)}
            />
            <span style={{ textDecoration: 'line-through' }}>{toDo.text}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoApp;
