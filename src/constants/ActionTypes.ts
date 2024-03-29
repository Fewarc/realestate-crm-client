const ActionTypes = {
  // alerts actions
  PUSH_ALERT: 'PUSH_ALERT',
  REMOVE_ALERT: 'REMOVE_ALERT',
  CLEAR_ALL_ALERTS: 'CLAER_ALL_ALERTS',
  CLEAR_ALL_ERRORS: 'CLEAR_ALL_ERRORS',
  CLEAR_ALL_WARNINGS: 'CLEAR_ALL_WARNINGS',
  CLEAR_ALL_INFOS: 'CLEAR_ALL_INFOS',

  //user actions
  LOG_IN_USER: 'LOG_IN_USER',
  LOG_OUT_USER: 'LOG_OUT_USER',
  UPDATE_USER: 'UPDATE_USER',

  // notification actions
  UPDATE_NOTIFICATIONS: 'UPDATE_NOTIFICATIONS',
  DELETE_NOTIFICATION: 'DELETE_NOTIFICATION',
  DELETE_ALL_NOTIFICATIONS: 'DELETE_ALL_NOTIFICATIONS',
  MARK_AS_SEEN: 'MARK_AS_SEEN',

  // messages actions
  UPDATE_MESSAGES: 'UPDATE_MESSAGES',

  // events actions
  UPDATE_EVENTS: 'UPDATE_EVENTS',

  // notes actions
  UPDATE_NOTES: 'UPADTE_NOTES'
}

export default ActionTypes;