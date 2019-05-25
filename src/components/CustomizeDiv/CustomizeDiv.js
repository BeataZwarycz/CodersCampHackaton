import React from 'react';
import { Message, Row } from '@livechat/ui-kit';

class CustomizeDiv extends React.Component {
    render() {
        return(
            <Row>
            <Message id="animation" isOwn>
                If you want customize chat window click here
            </Message>
            </Row>
        )
    }
}

export default CustomizeDiv