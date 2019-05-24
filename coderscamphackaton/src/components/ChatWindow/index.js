import React from 'react';
import { TitleBar, IconButton, CloseIcon, Message, MessageList, TextComposer, TextInput, SendButton, Row, FixedWrapper, MessageText, MessageGroup } from '@livechat/ui-kit';
import './ChatWindow.css';

class ChatWindow extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      ownMessages: []
    };
  }

  componentDidUpdate()
  {
    this.populateMessages();
  }

  sendMessage(content)
  {
    let ownMessages = [...this.state.ownMessages];
    ownMessages.push(content);
    this.setState({ ownMessages });
  }

  populateMessages()
  {
    return this.state.ownMessages.map(msg => {
      return (
        <Message isOwn key={Date.now()} style={{backgroundColor: '#CCC', fontSize: '2rem'}}>
          <MessageText>{msg}</MessageText>
        </Message>
      );
    })
  }

  render()
  {
    return (
      <FixedWrapper.Root style={{height: '500px', width: '400px', border: '1px solid #BBB'}}>
        <TitleBar style={{ fontSize: '1rem' }}rightIcons={[
                    <IconButton key="customize" style={{backgroundColor: 'var(--tertiary-color)'}}>
                      CUSTOMIZE
                    </IconButton>,
                    <IconButton key="close">
                      <CloseIcon />
                    </IconButton>
                  ]}
        />
        <MessageList style={{height: '400px', overflowY: 'auto'}}>
          <MessageGroup>
            <Message>{this.populateMessages()}</Message>
          </MessageGroup>
        </MessageList>
        <TextComposer onSend={(msg) => this.sendMessage(msg)}>
          <Row align="center">
            <TextInput placeholder="Feel free to ask whatever you want..." />
            <IconButton>
              <i className="material-icons">mic</i>
            </IconButton>
            <SendButton fit />
          </Row>
        </TextComposer>
      </FixedWrapper.Root>
    );
  }
}

export default ChatWindow;