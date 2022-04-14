import { Reducer, AnyAction } from 'redux';
import { IOptions } from '../../shared/Timer/Timer';
import { CHANGE_OPTIONS, TActionsOption } from './actions';

type OptionsActions = TActionsOption | AnyAction;
 
const initialStatisticsDataState: IOptions = {
  timePomodor: 25,
  timeShortRest: 5,
  timeLongRest: 15,
  frequencyLongRest: 4,
  alertToggle: true
};

export const optionsReducer: Reducer<IOptions, OptionsActions> = (state = initialStatisticsDataState, action) => {
  switch(action.type) {
    case CHANGE_OPTIONS: 
      return {
        ...state,
        timePomodor: action.timePomodor,
        timeShortRest: action.timeShortRest,
        timeLongRest: action.timeLongRest,
        frequencyLongRest: action.frequencyLongRest,
        alertToggle: action.alertToggle
      };
    default: 
      return state;
  }
}


