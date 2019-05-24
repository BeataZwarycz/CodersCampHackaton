import React from 'react';
import { TitleBar, IconButton, CloseIcon, MessageList, TextComposer, TextInput, SendButton } from '@livechat/ui-kit';
import './ChatWindow.css';

class ChatWindow extends React.Component
{
  render()
  {
    return (
      <div className="window">
        <TitleBar title="Chat"
                  rightIcons={[
                    <IconButton key="close">
                      <CloseIcon />
                    </IconButton>
                  ]}
        />
        <MessageList>

        </MessageList>
        <TextComposer>
          <TextInput fill />
          <SendButton fit />
        </TextComposer>
      </div>
    );
  }
}

export default ChatWindow;