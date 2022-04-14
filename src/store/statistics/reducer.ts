import { Reducer, AnyAction } from 'redux';
import { CHANGE_WEEK, TChangeWeek, IStatistics, CHANGE_DAY, TChangeDay } from './actions';

type StatisticsDataActions = TChangeWeek & TChangeDay | AnyAction;
 
const initialStatisticsDataState: IStatistics = {
  howWeek: 'nowWeek',
  howDay: new Date().toJSON().slice(0,10).replace(/-/g,'-'),
};

export const statisticsDataReducer: Reducer<IStatistics, StatisticsDataActions> = (state = initialStatisticsDataState, action) => {
  switch(action.type) {
    case CHANGE_WEEK: 
      return {
        ...state,
        howWeek: action.howWeek,
      };
    case CHANGE_DAY: 
      return {
        ...state,
        howDay: action.howDay,
      };
    default: 
      return state;
  }
}


