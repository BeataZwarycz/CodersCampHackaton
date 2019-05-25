import KeyboardEventHandler from 'react-keyboard-event-handler';
import React from 'react';

const ComponentKeys = (props) => (
<div>
<div><input></input></div>
  <KeyboardEventHandler
    handleKeys={['space']}
    onKeyEvent={(key, e) => {
    if (key==='space') {
        openMessanger(open);
    }
    }}/>
    <KeyboardEventHandler
    handleKeys={['esc']}
    onKeyEvent={(key, e) => {
        closeMessanger()
    }
    }/>
    <KeyboardEventHandler
    handleEventType = 'keypress'
    handleKeys={['s']}
    onKeyEvent={(key, e) => {
        speak()}}/>
</div>);

var open = false
function openMessanger() {
    if (open === false) {
        console.log('Otworzylem messanger');
        open = true;
    }
}

function closeMessanger(){
    if(open === true) {
        console.log('Zamknąłeś messanger.')
        open = false;
    }
}

function speak() {
    console.log('mówieeee')
}

export default ComponentKeys;