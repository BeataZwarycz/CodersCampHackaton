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
    fontSizeA: "12px",
    backgroundColor: ' #427fe1',
    defaultColor: 'white',
    secondBackgroundColor: 'white',
    messageColor: 'black',
    messageColorBackground: 'lightgray'
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
    this.setState({fontSizeA: '15px'})
  }
  sizeAA = () => {
    this.setState({fontSizeA: '20px'})
  }
    sizeAAA = () => {
    this.setState({fontSizeA: '25px'})
  }

  defaultContrast = () => {
    this.setState({backgroundColor: ' #427fe1'})
    this.setState({defaultColor: 'white'})
    this.setState({secondBackgroundColor: 'white'})
    this.setState({messageColor: 'black'})
    this.setState({messageColorBackground: 'lightgray'})
  }

  firstContrast = () => {
    this.setState({backgroundColor: 'yellow'})
    this.setState({defaultColor: 'black'})
    this.setState({secondBackgroundColor: 'yellow'})
    this.setState({messageColor: 'black'})
    this.setState({messageColorBackground: '#ffff8d'})
  }
  secondContrast = () => {
    this.setState({backgroundColor: 'black'})
    this.setState({defaultColor: 'yellow'})
    this.setState({secondBackgroundColor: 'black'})
    this.setState({messageColor: 'black'})
    this.setState({messageColorBackground: '#ffff8d'})
  }
  thirdContrast = () => {
    this.setState({backgroundColor: 'black'})
    this.setState({defaultColor: 'white'})
    this.setState({secondBackgroundColor: 'black'})
    this.setState({messageColor: 'white'})
    this.setState({messageColorBackground: 'gray'})
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
          <div>Change Window Color</div>
          <div className="colorChangesHolder">
          <div className="changeColorDiv defaultColor" onClick={this.defaultContrast}>A</div>  
          <div className="changeColorDiv firstColor" onClick={this.firstContrast}>A</div>
          <div className="changeColorDiv secondColor"onClick={this.secondContrast}>A</div>
          <div className="changeColorDiv thirdColor"onClick={this.thirdContrast}>A</div>
          </div>
          <div><button id="a" onClick={this.sizeA}>A+</button><button id="aa" onClick={this.sizeAA}>A++</button><button id="aaa" onClick={this.sizeAAA}>A+++</button>Change text size</div>
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
    
        `}
        </style>
      </div>
    );
  }
}
export default Settings;