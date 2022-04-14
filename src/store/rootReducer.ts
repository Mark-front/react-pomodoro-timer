import { Reducer } from "redux";
import { UpdateTaskInputAction } from "../shared/updateTaskInput/actions";
import { taskInputReducer, UpdateInputTaskState } from "../shared/updateTaskInput/reducer";
import { taskArrReducer, UpdateTaskArrState } from './tasks/reducer';
import { TTimerClockState, timerClockReducer } from './timer/reducer';
import { IStatistics } from './statistics/actions';
import { statisticsDataReducer } from "./statistics/reducer";
import { IOptions } from '../shared/Timer/Timer';
import { optionsReducer } from "./options/reducer";

export type RootState = {
  taskInputText: UpdateInputTaskState;
  taskArr: UpdateTaskArrState;
  timerClock: TTimerClockState;
  statisticsState: IStatistics;
  options: IOptions;
}


const timerOptionsData = typeof localStorage !== "undefined" ? localStorage.getItem('timerOptions') : null;
const timerOptionsDataJSON: IOptions = timerOptionsData !== null ? JSON.parse(timerOptionsData) : '{}';

const initialState: RootState = {
  taskInputText: {text: ''},
  taskArr: {arr: []},
  options: {
    timePomodor: timerOptionsDataJSON.timePomodor,
    timeShortRest: timerOptionsDataJSON.timeShortRest,
    timeLongRest: timerOptionsDataJSON.timeLongRest,
    frequencyLongRest: timerOptionsDataJSON.frequencyLongRest,
    alertToggle: timerOptionsDataJSON.alertToggle
  },
  timerClock: {
    minutesInTimer: 0,
    minutes: timerOptionsDataJSON.timePomodor,
    seconds: 0,
    isActive: null,
    isRest: false,
    count: 1
  },
  statisticsState: {
    howWeek: 'nowWeek',
    howDay: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
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
    case 'TIMER_ALL_TIME': 
    case 'NUMBER_OF_TRIGGERED_TIMERS': 
    case "TIMER_SET_STATE": 
      return {
        ...state,
        timerClock: timerClockReducer(state.timerClock, action),
      };
    case "CHANGE_WEEK": 
    case "CHANGE_DAY": 
      return {
        ...state,
        statisticsState: statisticsDataReducer(state.statisticsState, action),
      };
    case "CHANGE_OPTIONS": 
      return {
        ...state,
        options: optionsReducer(state.options, action),
      };
    default:
      return state;
  }
}
