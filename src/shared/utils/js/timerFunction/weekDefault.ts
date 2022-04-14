import { ITimeDay } from "../../../Timer";
import { createData } from "./createData";
import { createDefaultDay } from "./createDefaultDay";

export const weekDefault = (howWeek: "nowWeek" | "lastWeek" | "beforeLastWeek") =>  {
  let weekArr: ITimeDay[] = []
  const current = new Date();
  const year = current.getUTCFullYear();
  const month = current.getUTCMonth();
  let dayNow;
  switch (howWeek) {
    case ("nowWeek"):
      dayNow = (current.getDate() - current.getDay())+2;
      break;
    case ("lastWeek"):
      dayNow = (current.getDate() - (current.getDay()+7))+2;
      break;
    case ("beforeLastWeek"):
      dayNow = (current.getDate() - (current.getDay()+14))+2;
      break;
  }
  
  for (let index = 0; index < 7; index++) {
    weekArr.push(createDefaultDay(createData(year, month, dayNow+index)))
  }
  return weekArr ;
}