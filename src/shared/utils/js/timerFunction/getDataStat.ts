import { ITimerData } from "../../../Timer";

export function getDataStat() {
  const timerDataStat = typeof localStorage !== "undefined" ? localStorage.getItem('timerData') : null;
  const timerDataStatJSON: ITimerData = timerDataStat !== null ? JSON.parse(timerDataStat) : '{}';
  return timerDataStatJSON;
}