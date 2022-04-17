import React, { ChangeEvent, FormEvent, useState } from 'react';
import styles from './timeroptions.css';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import { IOptions } from '../Timer/Timer';
import { useDispatch } from 'react-redux';
import { ChangeOptionsAction } from '../../store/options/actions';
import { useEffect } from 'react';
import { startTimerAction } from '../../store/timer/actions';

interface ITimerOptionsProps {
  isOpen: boolean;
  onClose: () => void;
  valueDefault: IOptions;
}

export function TimerOptions({onClose, isOpen, valueDefault}: ITimerOptionsProps) {
  const dispatch = useDispatch();
  const [timePomodor, setTimerPomodor] = useState(valueDefault.timePomodor);
  const [timeShortRest, setTimeShortRest] = useState(valueDefault.timeShortRest);
  const [timeLongRest, setTimeLongRest] = useState(valueDefault.timeLongRest);
  const [frequencyLongRest, setFrequencyLongRest] = useState(valueDefault.frequencyLongRest);
  const [alertToggle, setAlertToggle] = useState(valueDefault.alertToggle);

  useEffect(() => {
    setTimerPomodor(timePomodor);
    setTimeShortRest(timeShortRest);
    setTimeLongRest(timeLongRest);
    setFrequencyLongRest(frequencyLongRest);
    setAlertToggle(alertToggle);
  }, [timePomodor, timeShortRest, timeLongRest, frequencyLongRest, alertToggle])

  function handleChange(option: keyof IOptions, event: ChangeEvent<HTMLInputElement>) {
    let value = event.target.value.replace(/\D/, '');
    switch (option) {
      case 'timePomodor': 
      case 'timeShortRest': 
      case 'timeLongRest': 
        if(value.length > 3) {
          value = value.slice(0, -1);
        }
      return value;
      case 'frequencyLongRest':
        if(value.length > 2) {
          value = value.slice(0, -1);
        }
      return value;
    }
  }

  function handleChangeCheckbox(event: ChangeEvent<HTMLInputElement>) {
    setAlertToggle(event.target.checked);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  
  function returnValue() {
    return {
      timePomodor, 
      timeShortRest,
      timeLongRest,
      frequencyLongRest,
      alertToggle
    }
  }

  function buttonClick() {
    const valueOptions = returnValue();
    localStorage.setItem('timerOptions', JSON.stringify({
      timePomodor: valueOptions.timePomodor,
      timeShortRest: valueOptions.timeShortRest,
      timeLongRest: valueOptions.timeLongRest,
      frequencyLongRest: valueOptions.frequencyLongRest,
      alertToggle: valueOptions.alertToggle
    }));
    dispatch(ChangeOptionsAction(valueOptions.timePomodor, valueOptions.timeShortRest, valueOptions.timeLongRest, valueOptions.frequencyLongRest, valueOptions.alertToggle));
    dispatch(startTimerAction(valueOptions.timePomodor, 0, null));
    onClose();
  }

  return (
    <form onSubmit={handleSubmit} className={!isOpen ? styles.form : classNames(styles.form, styles.formVisible)}>
      <label className={styles.label}>
        <input onChange={(event) => setTimerPomodor(Number(handleChange('timePomodor', event)))} className={styles.input} type="text" value={String(timePomodor)}/>
        Продолжительность «помидора»
      </label>
      <label className={styles.label}>
        <input onChange={(event) => setTimeShortRest(Number(handleChange('timeShortRest', event)))} className={styles.input} type="text" value={String(timeShortRest)}/>
        Продолжительность короткого перерыва
      </label>
      <label className={styles.label}>
        <input onChange={(event) => setTimeLongRest(Number(handleChange('timeLongRest', event)))} className={styles.input} type="text" value={String(timeLongRest)}/>
        Продолжительность длинного перерыва
      </label>
      <label className={styles.label}>
        <input onChange={(event) => setFrequencyLongRest(Number(handleChange('frequencyLongRest', event)))} className={styles.input} type="text" value={String(frequencyLongRest)}/>
        Количество «помидоров» между большим отдыхом
      </label>
      <label className={styles.label}>
        <input className={styles.checkboxInput} onChange={(event) => handleChangeCheckbox(event)} type="checkbox" checked={alertToggle}/>
        <span className={styles.checkbox}>
          <span className={!alertToggle ? styles.checked : classNames(styles.checked, styles.checkboxChecked)}></span>
        </span>
        Включить уведомления
      </label>
      <Button isDisabled={(timePomodor === 0 || timeShortRest === 0 || timeLongRest === 0 || frequencyLongRest === 0)} onClick={() => buttonClick()} type={'submit'} color={'green'} children={'Изменить настройки'} />
    </form>
  );
}
