import {ActionCreator } from "redux";

export type TTaskArr = {
  value: string;
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
