import { nanoid } from 'nanoid';
import { ADD_TODO, MARK_TODO } from '../actions/types';

const ToDo = (state = { items: [] }, action) => {
  switch (action.type) {
    case ADD_TODO:
      state.items.push({
        id: nanoid(),
        text: action.text,
        done: false,
      });
      return state;

    case MARK_TODO:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.toDo.id ? { ...item, done: action.done } : item,
        ),
      };

    default:
      return state;
  }
};
export default ToDo;
