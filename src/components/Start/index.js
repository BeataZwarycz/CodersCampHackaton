import React, { Component } from "react";
import { FixedWrapper, Row, IconButton, CloseIcon, ChatIcon, MessageText, Message } from '@livechat/ui-kit';
import { connect } from 'react-redux';
// import KeyboardEventHandler from 'react-keyboard-event-handler';

import ChatWindow from '../ChatWindow';
import { openChat } from '../../actions';
import { watchFile } from "fs";

const Webcam = window.Webcam;
const posenet = window.posenet;
var isOpen = false;

class Start extends Component {
    constructor(props) {
        super(props);
    
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.spaceHandler = this.spaceHandler.bind(this);
        this.autoClick = this.autoClick.bind(this);
        this.takescreenshot = this.takescreenshot.bind(this);
      
//bez tego 
      }

      wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
      }

      componentDidMount() {
        document.addEventListener("keydown", this.spaceHandler);
        Webcam.set({
          width: 600,
          height: 400,
          image_format: 'jpeg',
          jpeg_quality: 90
        });
        Webcam.attach('#mywebcam');
        Webcam.on('load', () => {
          // this.wait(2000);
          setInterval(this.takescreenshot, 2000);
        });
        //setTimeout(this.takescreenshot(), 1000);

      }
    
    spaceHandler(e) {
      if (e.keyCode === 32) {
        this.open();
      }
    }



    takescreenshot(){

      console.log(isOpen);
          if (isOpen) this.props.openChat(true); 

      Webcam.snap(function(data_uri){

          document.getElementById('results').innerHTML = "<img id = 'obrazek' style = 'display:none' width='300' src='"+data_uri+"'>";  
        
  var imageScaleFactor = 0.5;
  var outputStride = 16;
  var flipHorizontal = false;

  var imageElement = document.getElementById('obrazek');

  posenet.load().then(function(net){
      return net.estimateSinglePose(imageElement, imageScaleFactor, flipHorizontal, outputStride)
  }).then(function(pose){
      console.log(pose);
      //console.log(pose.keypoints[2].position.y);
      //console.log(pose.keypoints[3].position.y);
      var temp = pose.keypoints[4].position.y-pose.keypoints[1].position.y;
      if(temp>20&&pose.keypoints[4].position.y>0&&pose.keypoints[1].position.y>0){
          console.log("udało sie"); // tu kiedy sie udało 
          const startWindow = document.getElementById('startWindow')
          startWindow.style.display = 'none';
          isOpen = true;
      }
  })
}
  )    
  }




    componentWillUnmount() {
      document.removeEventListener("keydown", this.spaceHandler);
    }



    close() {
        const startWindow = document.getElementById('startWindow')
        startWindow.style.display = 'none'
    }

    open() {
        const startWindow = document.getElementById('startWindow')
        startWindow.style.display = 'none';
        this.props.openChat(true);
        console.log(this.props.isChatOpened);
    }

    autoClick() {
      setInterval(this.takescreenshot(), 10000);
    }

    render() {
        return (
          <div>
            <div id="mywebcam" style={{display: 'none'}} onClick={this.autoClick}>
            }}></div>
            <div id="results"></div>
            <ChatWindow visible={this.props.isChatOpened} />
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
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    isChatOpened: state.isChatOpened
  };
}

export default connect(mapStateToProps, { openChat })(Start);