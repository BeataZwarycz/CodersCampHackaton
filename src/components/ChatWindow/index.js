import React from 'react';
import { connect } from 'react-redux';
import { FixedWrapper, TitleBar, IconButton, CloseIcon, MessageList, MessageGroup, Message, MessageText } from '@livechat/ui-kit';

import { openChat } from '../../actions'; 
import './ChatWindow.css';

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.continous = true;
recognition.interimResults = true;
recognition.lang = 'en-US';

class ChatWindow extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      ownMessages: [],
      listening: false,
      message: null,
      check: true
    };

    this.textarea = React.createRef()
    this.submitButton = React.createRef()
    this.paragraph = React.createRef()

    this.toggleListen = this.toggleListen.bind(this)
    this.handleListen = this.handleListen.bind(this)
  }

  componentDidUpdate() {
    console.log('CHAT ' + this.props.isChatOpened);
  }

  send = () => {
    this.setState({ check: false })

    let ownMessages = [...this.state.ownMessages];
    ownMessages.push(this.textarea.current.value);
    this.setState({ ownMessages });
    this.populateMessages();
    this.textarea.current.value = '';    
  }


  toggleListen() {
    this.setState({
      listening: !this.state.listening
    }, this.handleListen)

    console.log(this.textarea.current.value)
  }

  readClientMessage = () => {
    if (this.state.check === true) {
      const resp = this.textarea.current.value
      let respSynthesis = new SpeechSynthesisUtterance(resp);
      if (!window.speechSynthesis.speaking) {
        window.speechSynthesis.speak(respSynthesis);
      } else {
        window.speechSynthesis.cancel(respSynthesis)
      }
    }
    this.setState({ check: true })
  }



  handleListen() {

    console.log('listening?', this.state.listening)

    if (this.state.listening) {
      recognition.start()
      recognition.onend = () => {
        console.log("...continue listening...")
        recognition.start()
      }

    } else {
      recognition.stop()
      recognition.onend = () => {
        console.log("Stopped listening per click")
        this.readClientMessage()
      }
    }

    recognition.onstart = () => {
      console.log("Listening!")
    }

    let finalTranscript = ''
    recognition.onresult = event => {
      let interimTranscript = ''

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) finalTranscript += transcript + ' ';
        else interimTranscript += transcript;
      }
      const transcriptArr = finalTranscript.split(' ')
      const stopCmd = transcriptArr.slice(-3, -1)
      console.log('stopCmd', stopCmd)

      if (stopCmd[0] === 'stop' && stopCmd[1] === 'listening') {
        recognition.stop()
        recognition.onend = () => {
          console.log('Stopped listening per command')
          const finalText = transcriptArr.slice(0, -3).join(' ')
          console.log(finalText)

          this.setState({ message: this.textarea.current.value = finalText })
          this.setState({ check: true })
          this.readClientMessage()
          this.setState({ check: false })
        }
      }
      this.textarea.current.value = interimTranscript
      this.setState({ message: this.textarea.current.value = finalTranscript })

    }

  }

  
    
  

  // sendMessage(content)
  // {
  //   let ownMessages = [...this.state.ownMessages];
  //   ownMessages.push(content);
  //   this.setState({ ownMessages });
  // }

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
    console.log(this.props.isChatOpened);
    return (
      <FixedWrapper.Root className={this.props.isChatOpened ? 'visible' : 'invisible'} style={{height: '500px', width: '400px', border: '1px solid #BBB'}}>
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
                  <div>
          <textarea ref={this.textarea} />
          <button onClick={this.toggleListen} ref={this.submitButton}>microphone</button> 
          <button onClick={this.send}>Submit</button>
        </div>
      </FixedWrapper.Root>
    );
  }
}

const mapStateToProps = state => {
  return {
    isChatOpened: state.isChatOpened
  };
} 

export default connect(mapStateToProps, { openChat })(ChatWindow);