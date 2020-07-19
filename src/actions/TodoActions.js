/* eslint-disable import/prefer-default-export */
import { ADD_TODO, MARK_TODO } from './types';

export function addToDo(todoText) {
  return {
    type: ADD_TODO,
    text: todoText,
  };
}

export function markToDo(toDo, value) {
  return {
    type: MARK_TODO,
    toDo,
    done: value,
  };
}
