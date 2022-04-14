import { ActionCreator } from "redux";

export const START_TIMER = "START_TIMER";
export type TStartTimer= {
  type: typeof START_TIMER,
  minutes: number,
  seconds: number,
  isActive: boolean | null
}

export const startTimerAction: ActionCreator<TStartTimer> = (minutes, seconds, isActive) => ({
  type: START_TIMER, 
  minutes,
  seconds,
  isActive
}); 

export const TIMER_RESET = "TIMER_RESET";
export type TTimerReset = {
  type: typeof TIMER_RESET,
}

export const resetTimerAction: ActionCreator<TTimerReset> = (isRest) => ({
  type: TIMER_RESET, 
}); 

export const STOP_TIMER = "STOP_TIMER";
export type TStopTimer = {
  type: typeof STOP_TIMER,
  minutes: number,
  seconds: number,
  isActive: boolean | null,
}

export const stopTimerAction: ActionCreator<TStopTimer> = (minutes, seconds, isActive) => ({
  type: STOP_TIMER, 
  minutes,
  seconds,
  isActive
}); 

export const TIMER_ADD_TIME = "TIMER_ADD_TIME";
export type TTimerAddTime = {
  type: typeof TIMER_ADD_TIME,
  minutes: number,
}

export const addTimeTimerAction: ActionCreator<TTimerAddTime> = (minutes) => ({
  type: TIMER_ADD_TIME, 
  minutes,
});

export const TIMER_SET_STATE = "TIMER_SET_STATE";
export type TTimerSetState = {
  type: typeof TIMER_SET_STATE,
  minutes: number,
  seconds: number,
  isRest: boolean,
  isActive: boolean,
  count: number
}

export const timerSetStateAction: ActionCreator<TTimerSetState> = (minutes, seconds, isRest, isActive, count) => ({
  type: TIMER_SET_STATE, 
  minutes,
  seconds,
  isRest,
  isActive,
  count
});

export const TIMER_ALL_TIME = "TIMER_ALL_TIME";
export type TTimerAllTime = {
  type: typeof TIMER_ALL_TIME,
  minutesInTimer: number,
}

export const allTimeTimerAction: ActionCreator<TTimerAllTime> = (minutesInTimer) => ({
  type: TIMER_ALL_TIME, 
  minutesInTimer,
});

export const TOGGLE_TIMER_REST = "TOGGLE_TIMER_REST";
export type TToggleTimerRest= {
  type: typeof TOGGLE_TIMER_REST,
  isRest: boolean
}

export const toggleTimerRestAction: ActionCreator<TToggleTimerRest> = (isRest) => ({
  type: TOGGLE_TIMER_REST, 
  isRest
}); 

export const NUMBER_OF_TRIGGERED_TIMERS = "NUMBER_OF_TRIGGERED_TIMERS";
export type TNumberOfTriggeredTimers = {
  type: typeof NUMBER_OF_TRIGGERED_TIMERS,
  count: number
}

export const numberOfTriggeredTimers: ActionCreator<TNumberOfTriggeredTimers> = (count) => ({
  type: NUMBER_OF_TRIGGERED_TIMERS, 
  count
}); 