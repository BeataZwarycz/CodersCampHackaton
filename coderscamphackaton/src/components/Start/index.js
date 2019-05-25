import React, { Component } from "react";
import { FixedWrapper, Row, IconButton, CloseIcon, ChatIcon, MessageText, Message } from '@livechat/ui-kit';

class Start extends Component {
    constructor(props) {
        super(props);
    
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
      }

    close() {
        const startWindow = document.getElementById('startWindow')
        startWindow.style.display = 'none'
    }

    open() {
        const startWindow = document.getElementById('startWindow')
        startWindow.style.display = 'none'
    }

    render() {
        return (
            <FixedWrapper.Root>
                <FixedWrapper.Minimized style={{ width: '400px', height: '320px' }}>
                <Row reverse>
                    <div id="startWindow">
                        <Row style={{float: 'right'}}>
                            <IconButton>
                                <CloseIcon onClick={this.close}/>
                            </IconButton>
                        </Row>
                        <Row>
                        <Message style={{display: 'flex',
                            alignItems: 'center',
                            justifyIontent: 'center',
                            background: '#0093FF',
                            color: '#fff',
                            cursor: 'pointer',
                            heigth: '40%',
                            margin: '10px',
                            padding: '10px',
                            fontSize: '1.2em',
                            borderRadius: '30px 30px 0px 30px'}} isOwn>
                            <MessageText>If you want to start chat press SPACE</MessageText>
                        </Message>
                        </Row>
                        <Row>
                        <Message style={{display: 'flex',
                            alignItems: 'center',
                            justifyIontent: 'center',
                            background: '#0093FF',
                            color: '#fff',
                            cursor: 'pointer',
                            heigth: '40%',
                            margin: '10px',
                            padding: '10px',
                            fontSize: '1.2em',
                            borderRadius: '30px 30px 0px 30px'}} isOwn>
                            <MessageText>If you want to start chat with using vision control look left. </MessageText>
                        </Message>
                        </Row>
                        <Row style={{float: 'right'}}>
                            <IconButton>
                                <ChatIcon onClick={this.open}/>
                            </IconButton>
                        </Row>
                    </div>
                </Row>
                </FixedWrapper.Minimized>
            </FixedWrapper.Root>
        )
    }
}


export default Start;