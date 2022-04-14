import { Action, ActionCreator } from "redux";

export const UPDATE_TASK_INPUT = "UPDATE_TASK_INPUT";
export type UpdateTaskInputAction = {
  type: typeof UPDATE_TASK_INPUT,
  text: string
}

export const UpdateTaskInput: ActionCreator<UpdateTaskInputAction> = (text: string) => ({
  type: UPDATE_TASK_INPUT, 
  text
});