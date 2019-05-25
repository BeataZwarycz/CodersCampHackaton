import React from 'react';
import { Modal } from 'antd';
import './SettingsStyle.css';
import { IconButton, MenuVerticalIcon } from '@livechat/ui-kit';
import 'antd/dist/antd.css'

class Settings extends React.Component {
  state = {
    ModalText: '',
    visible: false,
    confirmLoading: false,
    fontSizeA: "12px"
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
        <style>{`         
        :root {
            font-size: ${this.state.fontSizeA}
          }
        `}
        </style>
      </div>
    );
  }
}
export default Settings;