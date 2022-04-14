import {ActionCreator } from "redux";
import { IOptions } from '../../shared/Timer/Timer';

export const CHANGE_OPTIONS = "CHANGE_OPTIONS";
export type TActionsOption = {
  type: typeof CHANGE_OPTIONS,
  timePomodor: number,
  timeShortRest: number,
  timeLongRest: number,
  frequencyLongRest: number,
  alertToggle: boolean,
}

export const ChangeOptionsAction: ActionCreator<TActionsOption> = (timePomodor, timeShortRest, timeLongRest, frequencyLongRest, alertToggle) => ({
type: CHANGE_OPTIONS, 
  timePomodor,
  timeShortRest,
  timeLongRest,
  frequencyLongRest,
  alertToggle
});