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
    minutes: 25,
    seconds: 0 
  }
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
      return {
        ...state,
      taskArr: taskArrReducer(state.taskArr, action),
      };
    case 'START_TIMER': 
    case 'STOP_TIMER': 
    case 'TIMER_RESET': 
      return {
        ...state,
      timerClock: timerClockReducer(state.timerClock, action),
      };
    default:
      return state;
  }
}
