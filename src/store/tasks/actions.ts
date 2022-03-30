import {ActionCreator } from "redux";

export type TTaskArr = {
  value: string;
  number: number;
  id: string;
}

export const UPDATE_TASK_ARR = "UPDATE_TASK_ARR";
export type TUpdateTaskArr = {
  type: typeof UPDATE_TASK_ARR,
  updateArr: TTaskArr[];
}

export const UpdateTaskArr: ActionCreator<TUpdateTaskArr> = (updateArr: TTaskArr[]) => ({
  type: UPDATE_TASK_ARR, 
  updateArr
});

export const GET_TASK_ARR = "GET_TASK_ARR";
export type TGetTaskArr = {
  type: typeof GET_TASK_ARR,
  getArr: TTaskArr[];
}

export const GetTaskArr: ActionCreator<TGetTaskArr> = (getArr: TTaskArr[]) => ({
  type: GET_TASK_ARR, 
  getArr
});

export const DELETE_TASKS_ITEM = "DELETE_TASKS_ITEM";
export type TDeleteTasksItem = {
  type: typeof DELETE_TASKS_ITEM,
  id: string;
}

export const DeleteTasksItem: ActionCreator<TDeleteTasksItem> = (id: string) => ({
  type: DELETE_TASKS_ITEM, 
  id
});

export const EDIT_TASKS_ITEM = "EDIT_TASKS_ITEM";
export type TEditTasksItem = {
  type: typeof EDIT_TASKS_ITEM,
  id: string,
  value: string;
}

export const EditTasksItem: ActionCreator<TEditTasksItem> = (id: string, value: string) => ({
  type: EDIT_TASKS_ITEM, 
  id, 
  value
});

export const ADD_TASK_NUMBER = "ADD_TASK_NUMBER";
export type TAddTaskNumber = {
  type: typeof ADD_TASK_NUMBER,
  id: string,
}

export const AddTaskNumberAction: ActionCreator<TAddTaskNumber> = (id: string) => ({
  type: ADD_TASK_NUMBER, 
  id, 
});

export const REMOVE_TASK_NUMBER = "REMOVE_TASK_NUMBER";
export type TRemoveTaskNumber = {
  type: typeof REMOVE_TASK_NUMBER,
  id: string,
}

export const RemoveTaskNumberAction: ActionCreator<TRemoveTaskNumber> = (id: string) => ({
  type: REMOVE_TASK_NUMBER, 
  id
});
