import { START_TIMER, STOP_TIMER, TIMER_ADD_TIME, TIMER_RESET, TStartTimer, TStopTimer, TTimerReset, NUMBER_OF_TRIGGERED_TIMERS, TNumberOfTriggeredTimers, TOGGLE_TIMER_REST, TToggleTimerRest } from './actions';
import { AnyAction, Reducer } from 'redux';

export type TTimerClockState = {
  minutes: number,
  seconds: number,
  isActive: boolean | null,
  isRest: boolean,
  count: number
};

type TTimerClockActions = TNumberOfTriggeredTimers & TToggleTimerRest & (TStartTimer | TTimerReset | TStopTimer) | AnyAction;

const initialTaskArrState = {
  minutes: 25,
  seconds: 0,
  isActive: false,
  isRest: false,
  count: 0
};

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
    case TIMER_RESET: 
      return {
        ...state,
        minutes: state.minutes = 0,
        seconds: state.seconds = 3,
        isActive: state.isActive = null,
      };
    case TIMER_ADD_TIME: 
      return {
        ...state,
        minutes: state.minutes + 1,
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


