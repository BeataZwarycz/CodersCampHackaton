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
          <p>{ModalText}</p>
        </Modal>
      </div>
    );
  }
}
export default Settings;