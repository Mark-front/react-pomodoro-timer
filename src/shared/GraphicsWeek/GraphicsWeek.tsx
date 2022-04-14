import React from 'react';
import { useDispatch} from 'react-redux';
import { ChangeDayAction} from '../../store/statistics/actions';
import { ITimerData } from '../Timer';
import { generateRandomString } from '../utils/react/generateRandomIndex';
import { GraphicsWeekButton } from '../GraphicsWeekButton';
import styles from './graphicsweek.css';

interface IGraphicsWeekData {
  data: ITimerData;
  howWeek: "nowWeek" | "lastWeek" | "beforeLastWeek";
  howDay: string;
}

export function GraphicsWeek({data, howWeek, howDay}: IGraphicsWeekData) {
  const dispatch = useDispatch();

  function getDayName(howDay: string) {
    const days = ['Вc', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];
    const dateArr = howDay.split("-");
    const year = parseInt(dateArr[0]);
    const month = parseInt(dateArr[1]) - 1;
    const day = parseInt(dateArr[2]);
    const date = new Date(year, month, day);
    return days[date.getDay()];
  }

  const createArr = () => {
    let arrDay: React.ReactNode[] = [];
    for (let index = 0; index < data[`${howWeek}`].length; index++) {
      const id = generateRandomString();
      arrDay.push(<GraphicsWeekButton key={id} dayName={getDayName(data[`${howWeek}`][index].dateDay)} isSelected={howDay === data[`${howWeek}`][index].dateDay} onClick={() => dispatch(ChangeDayAction(data[`${howWeek}`][index].dateDay))} />);
    }
    return arrDay;
  }
  const arr = createArr();
  return (
    <ul className={styles.list}>
      {arr.map((item) => item)}
    </ul>
  );
}
