import {ActionCreator } from "redux";

export interface IStatistics {
  howWeek: 'nowWeek' | 'lastWeek' | 'beforeLastWeek';
  howDay: string;
}

export const CHANGE_WEEK = "CHANGE_WEEK";
export type TChangeWeek = {
  type: typeof CHANGE_WEEK,
  howWeek: 'nowWeek' | 'lastWeek' | 'beforeLastWeek',
}

export const ChangeWeekAction: ActionCreator<TChangeWeek> = (howWeek) => ({
  type: CHANGE_WEEK, 
  howWeek
});

export const CHANGE_DAY = "CHANGE_DAY";
export type TChangeDay = {
  type: typeof CHANGE_DAY,
  howDay: string,
}

export const ChangeDayAction: ActionCreator<TChangeDay> = (howDay) => ({
type: CHANGE_DAY, 
  howDay
});