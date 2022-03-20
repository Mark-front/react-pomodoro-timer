import { Reducer, AnyAction } from 'redux';
import { UpdateTaskInputAction, UPDATE_TASK_INPUT } from './actions';

export type UpdateInputTaskState = {
  text: string;
}

type TaskInputActions = UpdateTaskInputAction | AnyAction;

const initialTaskInputState = {
  text: ''
}

export const taskInputReducer: Reducer<UpdateInputTaskState, TaskInputActions> = (state = initialTaskInputState, action) => {
  switch(action.type) {
    case UPDATE_TASK_INPUT: 
      return {
        ...state,
        text: action.text,
      };
    default: 
      return state;
  }
}


