import React, { Component } from "react";
import { FixedWrapper, Row, IconButton, CloseIcon, ChatIcon } from '@livechat/ui-kit';

class Start extends Component {
    constructor(props) {
        super(props);
    
        this.close = this.close.bind(this);
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
                <FixedWrapper.Minimized style={{ width: '400px', height: '200px' }}>
                <Row reverse>
                    <div id="startWindow">
                        <div onClick={this.close} style={{float: 'right'}}>
                        <Row>
                            <IconButton>
                                <CloseIcon />
                            </IconButton>
                        </Row>
                        </div>
                        <div className="startSpace" style={{display: 'flex',
                            alignItems: 'center',
                            justifyIontent: 'center',
                            background: '#0093FF',
                            color: '#fff',
                            heigth: '40%',
                            cursor: 'pointer',
                            margin: '10px',
                            padding: '10px',
                            fontSize: '1.2em',
                            borderRadius: '30px 30px 0px 30px'
                            }}>
                            If you want to start chat press SPACE
                        </div>
                        <div className="startEye" style={{display: 'flex',
                            alignItems: 'center',
                            justifyIontent: 'center',
                            background: '#0093FF',
                            color: '#fff',
                            cursor: 'pointer',
                            heigth: '40%',
                            margin: '10px',
                            padding: '10px',
                            fontSize: '1.2em',
                            borderRadius: '30px 30px 0px 30px'}}>
                            If you want to start chat with using vision control look down for 5 sec.
                        </div>
                        <div id="startChat" style={{float: 'right'}}>
                        <Row>
                            <IconButton>
                                <ChatIcon />
                            </IconButton>
                        </Row>
                        </div>
                    </div>
                </Row>
                </FixedWrapper.Minimized>
            </FixedWrapper.Root>
        )
    }
}


export default Start;