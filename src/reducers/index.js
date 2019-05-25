import { combineReducers } from 'redux';

const openChatReducer = (opened = false, action) => {
  console.log('open chat reducer');
  switch (action.type) {
    case 'CHAT_OPENED': return action.payload;
    default: return opened;
}
}

export default combineReducers({
  isChatOpened: openChatReducer
});