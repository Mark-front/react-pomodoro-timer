import { Reducer, AnyAction } from 'redux';
import { DELETE_TASKS_ITEM, TTaskArr, TUpdateTaskArr, UPDATE_TASK_ARR, TDeleteTasksItem, GET_TASK_ARR, TGetTaskArr, EDIT_TASKS_ITEM, TEditTasksItem, ADD_TASK_NUMBER, REMOVE_TASK_NUMBER } from './actions';

export type UpdateTaskArrState = {
  arr: TTaskArr[]
};
type TaskArrActions = TEditTasksItem & TGetTaskArr & TUpdateTaskArr & TDeleteTasksItem | AnyAction;
 
const initialTaskArrState = {
  arr: [],
};

export const taskArrReducer: Reducer<UpdateTaskArrState, TaskArrActions> = (state = initialTaskArrState, action) => {
  switch(action.type) {
    case UPDATE_TASK_ARR: 
      return {
        ...state,
        arr: [...state.arr, action.updateArr],
      };
    case GET_TASK_ARR: 
      return {
        ...state,
        arr: action.getArr,
      };
    case DELETE_TASKS_ITEM: 
      return {
        ...state,
        arr: state.arr.filter(item => item.id !== action.id),
      };
    case ADD_TASK_NUMBER: 
      return {
        ...state,
        arr: state.arr.map((item) => {
          if(item.id === action.id) {
            return {
              number: item.number + 1,
              value: item.value,
              id: item.id
            }
          } else return {
            number: item.number,
            value: item.value,
            id: item.id
          }
        }),
      };
      case REMOVE_TASK_NUMBER: 
      return {
        ...state,
        arr: state.arr.map((item) => {
          if(item.id === action.id && item.number > 1) {
            return {
              number: item.number - 1,
              value: item.value,
              id: item.id
            }
          } else return {
            number: item.number,
            value: item.value,
            id: item.id
          }
        }),
      };
      case EDIT_TASKS_ITEM: 
      return {
        ...state,
        arr: state.arr.map((item) => {
          if(item.id === action.id) {
            return {
              number: item.number,
              value: action.value,
              id: action.id
            }
          } else return {
            number: item.number,
            value: item.value,
            id: item.id
          }
        }),
      };
    default: 
      return state;
  }
}


