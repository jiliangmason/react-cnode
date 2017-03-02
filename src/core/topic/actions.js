export const topicActions = {
  FETCH_TOPIC_FAILED: 'FETCH_TOPIC_FAILED',
  FETCH_TOPIC_PENDING: 'FETCH_TOPIC_PENDING',
  FETCH_TOPIC_FULFILLED: 'FETCH_TOPIC_FULFILLED',

  LOAD_TOPICS: 'LOAD_TOPICS',
  LOAD_TOPIC: 'LOAD_TOPIC',

  SAVE_SCROLL_TOP: 'SAVE_SCROLL_TOP',
  TOGGLE_TOPICS_NAV: 'TOGGLE_TOPICS_NAV',
  SAVE_SELECTED_TAB: 'SAVE_SELECTED_TAB',
  TOGGLE_TOPICS_HEADER: 'TOGGLE_TOPICS_HEADER',

  fetchTopicFailed: result => ({
    type: topicActions.FETCH_TOPIC_FAILED,
    payload: result
  }),

  fetchTopicFulfilled: result => ({
    type: topicActions.FETCH_TOPIC_FULFILLED,
    payload: result
  }),

  fetchTopicPending: param => ({
    type: topicActions.FETCH_TOPIC_PENDING,
    payload: param
  }),

  loadTopics: param => ({
    type: topicActions.LOAD_TOPICS,
    payload: param
  }),

  loadTopic: param => ({
    type: topicActions.LOAD_TOPIC,
    payload: param
  }),

  saveScrollTop: (tab, scrollTop) => ({
    type: topicActions.SAVE_SCROLL_TOP,
    payload: {
      tab,
      scrollTop
    }
  }),

  toggleTopicsNav: () => ({
    type: topicActions.TOGGLE_TOPICS_NAV
  }),

  saveSelectedTab: (tab) => ({
    type: topicActions.SAVE_SELECTED_TAB,
    payload: tab
  }),

  toggleTopicsHeader: (bool) => ({
    type: topicActions.TOGGLE_TOPICS_HEADER,
    payload: bool
  })
};

export const topicRequestActions = {
  failed: topicActions.fetchTopicFailed,
  fulfilled: topicActions.fetchTopicFulfilled,
  pending: topicActions.fetchTopicPending
};