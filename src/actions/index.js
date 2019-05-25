export const openChat = (opened) => {
  console.log('open chat action');
  return {
      type: 'CHAT_OPENED',
      payload: opened
  }
} 
