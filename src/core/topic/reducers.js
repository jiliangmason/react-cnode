import {fromJS} from 'immutable';
import {topicActions} from './actions';

export const TopicState = {
  all: {
    isPending: false,
    isReloading: false,
    data: [],
    scrollTop: 0
  },
  ask: {
    isPending: false,
    isReloading: false,
    data: [],
    scrollTop: 0
  },
  good: {
    isPending: false,
    isReloading: false,
    data: [],
    scrollTop: 0
  },
  job: {
    isPending: false,
    isReloading: false,
    data: [],
    scrollTop: 0
  },
  share: {
    isPending: false,
    isReloading: false,
    data: [],
    scrollTop: 0
  },
  list: []
};

export function topicReducer(state = fromJS(TopicState), action) {

  if (!topicActions.hasOwnProperty(action.type)) {
    return state;
  }

  const {payload, type} = action;
  const {type: payloadType, param, result} = payload;

  switch (type) {
    case topicActions.FETCH_TOPIC_PENDING:

      if (payloadType === 'topics') {
        return state.setIn([param.tab, param.reload ? 'isReloading' : 'isPending'], true);
      }

      return state;

    case topicActions.FETCH_TOPIC_FAILED:

      if (payloadType === 'topics') {
        return state.setIn([param.tab, param.reload ? 'isReloading' : 'isPending'], false);
      }

      return state;

    case topicActions.FETCH_TOPIC_FULFILLED:

      if (payloadType === 'topics') {
        const ids = result.data.data.map(data => data.id);

        return state.mergeDeep({
          [param.tab]: {
            data: param.reload ? ids : state.getIn([param.tab, 'data']).concat(ids),
            [param.reload ? 'isReloading' : 'isPending']: false,
            page: param.page
          }
        });
      }

      return state;

    case topicActions.SAVE_SCROLL_TOP:
      return state.setIn([payload.tab, 'scrollTop'], payload.scrollTop);

    default:
      return state;
  }
}