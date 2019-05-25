import React from 'react';
import { TitleBar, IconButton, CloseIcon, Message, MessageList, TextComposer, TextInput, SendButton, Row, FixedWrapper, MessageText, MessageGroup, MenuVerticalIcon } from '@livechat/ui-kit';
import './ChatWindow.css';
import { Modal } from 'antd';
import 'antd/dist/antd.css'
import Settings from '../SettingsChat/Settings'

class ChatWindow extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      ownMessages: [],
      styles: null
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
      <FixedWrapper.Root id="newStyles" style={{height: '500px', width: '400px', border: '1px solid #BBB'}}>
        <TitleBar style={{ fontSize: '1rem' }}rightIcons={[
                  <Settings/>,
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

/*class Settings extends React.Component {
  state = {
    ModalText: '',
    visible: false,
    confirmLoading: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({
      ModalText: '',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 1000);
  };

  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  };

  sizeA = () => {
    const object = document.getElementById('newStyles')
    object.style.background = "#ff0"
    object.style.color = "#000"
  }

  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <IconButton type="primary" onClick={this.showModal}>
         <MenuVerticalIcon />
        </IconButton>
        <Modal className="modalStyle"
          title="Settings"
          visible={visible}
          onOk={this.handleOk}
          confirmLoading={confirmLoading}
          onCancel={this.handleCancel}
          okText="Confirm"
          mask={false}
        >
          <div>Change Window Size</div>
          <div><button>A</button><button>A</button><button>A</button>Change color</div>
          <div><button id="a" onClick={this.sizeA}>A+</button><button id="aa" onClick={this.sizeAA}>A++</button><button id="aaa" onClick={this.sizeAAA}>A+++</button>Change text size</div>
        </Modal>
      </div>
    );
  }
}*/

export default ChatWindow;