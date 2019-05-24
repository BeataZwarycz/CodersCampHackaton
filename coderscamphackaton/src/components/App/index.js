import React from 'react';
import { ThemeProvider } from '@livechat/ui-kit'

import AgentResponse from '../AgentResponse';
import ChatWindow from '../ChatWindow';


function App() {
  return (
    <ThemeProvider>
      <AgentResponse content="Sample agent response"/>
      <ChatWindow />
    </ThemeProvider>
  );
}

export default App;
