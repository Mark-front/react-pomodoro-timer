import { START_TIMER, STOP_TIMER, TIMER_RESET, TStartTimer, TStopTimer, TTimerReset } from './actions';
import { AnyAction, Reducer } from 'redux';

export type TTimerClockState = {
  minutes: number;
  seconds: number;
};

type TTimerClockActions = TStartTimer | TTimerReset | TStopTimer | AnyAction;

const initialTaskArrState = {
  minutes: 25,
  seconds: 0
};

export const timerClockReducer: Reducer<TTimerClockState, TTimerClockActions> = (state = initialTaskArrState, action) => {
  switch(action.type) {
    case START_TIMER: 
      return {
        ...state,
        minutes: action.minutes,
        seconds: action.seconds
      };
    case STOP_TIMER: 
      return {
        ...state,
        minutes: action.minutes,
        seconds: action.seconds
      };
    case TIMER_RESET: 
      return {
        ...state,
        minutes: 0,
        seconds: 0
      };
    default: 
      return state;
  }
}


