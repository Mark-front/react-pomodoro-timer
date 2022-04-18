import { ITimeDay } from "../../../Timer";
import { createData } from "./createData";
import { createDefaultDay } from "./createDefaultDay";

export const weekDefault = (howWeek: "nowWeek" | "lastWeek" | "beforeLastWeek") =>  {
  let weekArr: ITimeDay[] = []
  const current = new Date();
  const year = current.getUTCFullYear();
  const month = current.getUTCMonth();
  const dayNow = () => {
    switch (howWeek) {
      case ("nowWeek"):
        return (current.getDate() - current.getDay())+2;
      case ("lastWeek"):
        return (current.getDate() - current.getDay())-5;
      case ("beforeLastWeek"):
        return (current.getDate() -current.getDay())-12;
    }
  } ;
  
  for (let index = 0; index < 7; index++) {
    weekArr.push(createDefaultDay(createData(year, month, dayNow()+index)))
  }
  return weekArr ;
}