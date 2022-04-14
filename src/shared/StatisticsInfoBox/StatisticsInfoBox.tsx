import React from 'react';
import styles from './statisticsinfobox.css';
import { IconInfoFocus } from '../icons/IconInfoFocus';
import { IconInfoPause } from '../icons/IconInfoPause';
import { IconInfoStop } from '../icons/IconInfoStop';
import classNames from 'classnames';

interface IStatisticsInfoBoxProps {
  howInfoBlock: "focus" | "stops" | "pause";
  value: number | undefined;
  isDisabled: boolean;
}

interface IInfoData {
  header: string;
  typeValue: '' | '%' | 'м';
  icon: React.ReactNode;
  styleBox: string;
  styleIcon: string;
}

export function StatisticsInfoBox({isDisabled, value, howInfoBlock}: IStatisticsInfoBoxProps) {
  function filterBlock() {
    let infoData: IInfoData;
    switch(howInfoBlock) {
      case "focus": 
        return infoData = {
          header: 'Фокус',
          typeValue: '%',
          icon: <IconInfoFocus/>,
          styleBox: styles.boxFocus,
          styleIcon: styles.iconFocus,
        }
        case "pause":
          return infoData = {
            header: 'Время на паузе',
            typeValue: 'м',
            icon: <IconInfoPause/>,
            styleBox: styles.boxPause,
            styleIcon: styles.iconPause,
          }
          case "stops":
            return infoData = {
              header: 'Остановки',
              typeValue: '',
              icon: <IconInfoStop/>,
              styleBox: styles.boxStops,
              styleIcon: styles.iconStops,
        }
    }
  }

  const data = filterBlock();
  const boxClass = classNames(styles.box, data.styleBox);
  const iconClass = classNames(styles.icon, data.styleIcon);
  return (
    <div className={isDisabled ? styles.box : boxClass}>
      <h3 className={styles.header}>{data.header}</h3>
      <div className={styles.value}>
        {`${value}` + data.typeValue}
      </div>
      <span className={isDisabled ? styles.iconDisabled : iconClass}>
        {data.icon}
      </span>
    </div>
  );
}
