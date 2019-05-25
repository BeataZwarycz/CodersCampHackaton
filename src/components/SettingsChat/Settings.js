import React from 'react';
import { Modal } from 'antd';

import { IconButton, MenuVerticalIcon } from '@livechat/ui-kit';
import 'antd/dist/antd.css'
import { withTheme } from 'emotion-theming';

class Settings extends React.Component {
  state = {
    ModalText: '',
    visible: false,
    confirmLoading: false,
    fontSizeA: "8px",
    backgroundColor: '#427fe1',
    defaultColor: 'white',
    secondBackgroundColor: 'white',
    messageColor: 'black',
    messageColorBackground: 'lightgray',
    textAreaText: 'black',
    boxBackground: 'white',
    iconColor: '#427fe1',
    underDiv: "white",
    margin: '19px'
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
    this.setState({fontSizeA: '8px'})
    this.setState({margin: '19px'})
  }
  sizeAA = () => {
    this.setState({fontSizeA: '15px'})
    this.setState({margin: '14px'})
  }
    sizeAAA = () => {
    this.setState({fontSizeA: '23px'})
    this.setState({margin: '6px'})
  }

  defaultContrast = () => {
    this.setState({backgroundColor: ' #427fe1'})
    this.setState({defaultColor: 'white'})
    this.setState({secondBackgroundColor: 'white'})
    this.setState({messageColor: 'black'})
    this.setState({messageColorBackground: 'lightgray'})
    this.setState({textAreaText: 'black'})
    this.setState({boxBackground: 'white'})
    this.setState({iconColor: '#427fe1'})
    this.setState({underDiv: 'white'})
  }

  firstContrast = () => {
    this.setState({backgroundColor: 'yellow'})
    this.setState({defaultColor: 'black'})
    this.setState({secondBackgroundColor: 'yellow'})
    this.setState({messageColor: 'black'})
    this.setState({messageColorBackground: '#ffff8d'})
    this.setState({textAreaText: 'black'})
    this.setState({boxBackground: 'yellow'})
     this.setState({iconColor: 'black'})
     this.setState({underDiv: 'yellow'})
  }
  secondContrast = () => {
    this.setState({backgroundColor: 'black'})
    this.setState({defaultColor: 'yellow'})
    this.setState({secondBackgroundColor: 'black'})
    this.setState({messageColor: 'yellow'})
    this.setState({messageColorBackground: '#212121'})
    this.setState({textAreaText: 'yellow'})
    this.setState({boxBackground: 'black'})
     this.setState({iconColor: 'yellow'})
     this.setState({underDiv: 'black'})
  }
  thirdContrast = () => {
    this.setState({backgroundColor: 'black'})
    this.setState({defaultColor: 'white'})
    this.setState({secondBackgroundColor: 'black'})
    this.setState({messageColor: 'white'})
    this.setState({messageColorBackground: '#212121'})
    this.setState({textAreaText: 'white'})
    this.setState({boxBackground: 'black'})
     this.setState({iconColor: 'white'})
     this.setState({underDiv: 'black'})
  }


  render() {
    const { visible, confirmLoading, ModalText } = this.state;
    return (
      <div>
        <IconButton type="primary" onClick={this.showModal} style={{fontSize: '1.8rem'}}>
          CUSTOMIZE
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
          <div className="changeColorHeader">Change chat Color</div>
          <div className="colorChangesHolder">
          <div className="changeColorDiv defaultColor" onClick={this.defaultContrast}>A</div>  
          <div className="changeColorDiv firstColor" onClick={this.firstContrast}>A</div>
          <div className="changeColorDiv secondColor"onClick={this.secondContrast}>A</div>
          <div className="changeColorDiv thirdColor"onClick={this.thirdContrast}>A</div>
          </div>
          <div className="changeColorHeader">Change font size</div>
          <div className="fontSizeHolder">
          <div id="a" className="fontSize" onClick={this.sizeA}>A+</div>
          <div id="aa" className="fontSize" onClick={this.sizeAA}>A++</div>
          <div id="aaa" className="fontSize" onClick={this.sizeAAA}>A+++</div>
          </div>
        </Modal>
        <style>{`         
        :root {
            font-size: ${this.state.fontSizeA};
        
          }
          .lc-d8sbwq {
            background-color: ${this.state.backgroundColor} !important;
            color: ${this.state.defaultColor} !important;
          }
          .lc-713hhl {
             background-color: ${this.state.secondBackgroundColor} !important;
          }

          .lc-iqo9ar {
            background-color: ${this.state.secondBackgroundColor} !important;
          }
          
          .lc-3ft2j8 {
            color: ${this.state.messageColor} !important;
            background-color: ${this.state.messageColorBackground} !important;
          }

          .mainTextArea {
            color: ${this.state.textAreaText};
          }
          
          .box {
            background-color: ${this.state.boxBackground};
          }

          .box i {
            color: ${this.state.iconColor};
          }
          .lc-1pdwro1 {
            background-color: ${this.state.underDiv};
          }
          .send {
            margin-top:${this.state.margin}
          }
        `}
        </style>
      </div>
    );
  }
}
export default Settings;