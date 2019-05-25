import React from 'react';
import { ThemeProvider } from '@livechat/ui-kit';

import ChatWindow from '../ChatWindow';
import Start from '../Start';

class App extends React.Component
{
  render()
  {
    return (
      <ThemeProvider>
        <Start />
      </ThemeProvider>
    );
  }
};

export default App;