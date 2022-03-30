import { Reducer } from "redux";
import { UpdateTaskInputAction } from "./updateTaskInput/actions";
import { taskInputReducer, UpdateInputTaskState } from "./updateTaskInput/reducer";
import { taskArrReducer, UpdateTaskArrState } from './tasks/reducer';
import { TTimerClockState, timerClockReducer } from './timer/reducer';

export type RootState = {
  taskInputText: UpdateInputTaskState;
  taskArr: UpdateTaskArrState;
  timerClock: TTimerClockState;
}

const initialState = {
  taskInputText: {text: ''},
  taskArr: {arr: []},
  timerClock: {
    minutes: 0,
    seconds: 3,
    isActive: null,
    isRest: false,
    count: 1
  },
}

export type MyAction = UpdateTaskInputAction;

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TASK_INPUT': 
      return {
        ...state,
        taskInputText: taskInputReducer(state.taskInputText, action),
      };
    case 'UPDATE_TASK_ARR': 
    case 'GET_TASK_ARR': 
    case 'DELETE_TASKS_ITEM': 
    case 'EDIT_TASKS_ITEM': 
    case 'REMOVE_TASK_NUMBER': 
    case 'ADD_TASK_NUMBER': 
      return {
        ...state,
      taskArr: taskArrReducer(state.taskArr, action),
      };
    case 'START_TIMER': 
    case 'TOGGLE_TIMER_REST': 
    case 'STOP_TIMER': 
    case 'TIMER_RESET': 
    case 'TIMER_ADD_TIME': 
    case 'NUMBER_OF_TRIGGERED_TIMERS': 
      return {
        ...state,
      timerClock: timerClockReducer(state.timerClock, action),
      };
    default:
      return state;
  }
}
