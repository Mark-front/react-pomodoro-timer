import { ITimerData } from "../../../Timer";
import { weekDefault } from "./weekDefault";

export function getDataStat() {
  let timerDataStat = typeof localStorage !== "undefined" ? localStorage.getItem('timerData') : null;
  let timerDataStatJSON: ITimerData = timerDataStat !== null ? JSON.parse(timerDataStat) : {};
  if(timerDataStat !== null) {
    const dateInArr = new Date(timerDataStatJSON.nowWeek[timerDataStatJSON.nowWeek.length-1].dateDay);
    if(dateInArr.getDate() < new Date().getDate()) {
      timerDataStatJSON.beforeLastWeek = {...timerDataStatJSON.lastWeek};
      timerDataStatJSON.lastWeek = {...timerDataStatJSON.nowWeek};
      timerDataStatJSON.nowWeek = weekDefault('nowWeek');
      localStorage.setItem('timerData', JSON.stringify(timerDataStatJSON));
    }
  } else {localStorage.setItem('timerData', JSON.stringify({
    'beforeLastWeek': weekDefault('beforeLastWeek'),
    'lastWeek': weekDefault('lastWeek'),
    'nowWeek': weekDefault('nowWeek')
    }));
  }
  return timerDataStatJSON;
}