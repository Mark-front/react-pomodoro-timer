import { START_TIMER, STOP_TIMER, TIMER_ADD_TIME, TIMER_RESET, TStartTimer, TStopTimer, TTimerReset, NUMBER_OF_TRIGGERED_TIMERS, TNumberOfTriggeredTimers, TOGGLE_TIMER_REST, TToggleTimerRest, TTimerAllTime, TIMER_ALL_TIME, TIMER_SET_STATE } from './actions';
import { AnyAction, Reducer } from 'redux';
import { IOptions } from '../../shared/Timer';

export type TTimerClockState = {
  minutesInTimer: number,
  minutes: number,
  seconds: number,
  isActive: boolean | null,
  isRest: boolean,
  count: number
};

type TTimerClockActions =  TTimerAllTime & TNumberOfTriggeredTimers & TToggleTimerRest & (TStartTimer | TTimerReset | TStopTimer) | AnyAction;

const initialTaskArrState = {
  minutesInTimer: 0,
  minutes: 25,
  seconds: 0,
  isActive: false,
  isRest: false,
  count: 0
};

const timerOptionsData = typeof localStorage !== "undefined" ? localStorage.getItem('timerOptions') : null;
const timerOptionsDataJSON: IOptions = timerOptionsData !== null ? JSON.parse(timerOptionsData) : {};

export const timerClockReducer: Reducer<TTimerClockState, TTimerClockActions> = (state = initialTaskArrState, action) => {
  switch(action.type) {
    case START_TIMER: 
      return {
        ...state,
        minutes: action.minutes,
        seconds: action.seconds,
        isActive: action.isActive
      };
    case STOP_TIMER: 
      return {
        ...state,
        minutes: action.minutes,
        seconds: action.seconds,
        isActive: action.isActive
      };
    case TIMER_SET_STATE: 
      return {
        ...state,
        minutes: action.minutes,
        seconds: action.seconds,
        isActive: action.isActive,
        isRest: action.isRest,
        count:  action.count
      };
    case TIMER_RESET: 
      return {
        ...state,
        minutes: state.minutes = timerOptionsDataJSON.timePomodor ? timerOptionsDataJSON.timePomodor : 25,
        seconds: state.seconds = 0,
        isActive: state.isActive = null,
      };
    case TIMER_ADD_TIME: 
      return {
        ...state,
        minutes: state.minutes + 1,
      };
    case TIMER_ALL_TIME: 
      return {
        ...state,
        minutesInTimer: action.minutesInTimer,
      };
    case TOGGLE_TIMER_REST: 
      return {
        ...state,
        isRest: state.isRest = action.isRest
      };
    case NUMBER_OF_TRIGGERED_TIMERS: 
      return {
        ...state,
        count: state.count + 1
      };
    default: 
      return state;
  }
}


