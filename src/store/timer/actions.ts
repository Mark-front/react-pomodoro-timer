import { ActionCreator } from "redux";

export const START_TIMER = "START_TIMER";
export type TStartTimer= {
  type: typeof START_TIMER,
  minutes: number,
  seconds: number
}

export const startTimerAction: ActionCreator<TStartTimer> = (minutes, seconds) => ({
  type: START_TIMER, 
  minutes,
  seconds
}); 

export const TIMER_RESET = "TIMER_RESET";
export type TTimerReset = {
  type: typeof TIMER_RESET,
  minutes: number,
  seconds: number
}

export const resetTimerAction: ActionCreator<TTimerReset> = (minutes, seconds) => ({
  type: TIMER_RESET, 
  minutes,
  seconds
}); 

export const STOP_TIMER = "STOP_TIMER";
export type TStopTimer = {
  type: typeof STOP_TIMER,
  minutes: number,
  seconds: number
}

export const stopTimerAction: ActionCreator<TStopTimer> = (minutes, seconds) => ({
  type: STOP_TIMER, 
  minutes,
  seconds
}); 