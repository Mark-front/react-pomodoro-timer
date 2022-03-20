import { Reducer, AnyAction } from 'redux';
import { TTaskArr, TUpdateTaskArr, UPDATE_TASK_ARR } from './actions';

export type UpdateTaskArrState = {
  arr: TTaskArr[]
};
type TaskArrActions = TUpdateTaskArr | AnyAction;

const initialTaskArrState = {
  arr: []
};

export const taskArrReducer: Reducer<UpdateTaskArrState, TaskArrActions> = (state = initialTaskArrState, action) => {
  switch(action.type) {
    case UPDATE_TASK_ARR: 
      return {
        ...state,
        arr: [...state.arr, action.updateArr],
      };
    default: 
      return state;
  }
}


