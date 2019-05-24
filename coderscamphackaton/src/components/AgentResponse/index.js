import React from 'react';

class AgentResponse extends React.Component
{
  synthesize(message) {
    if (!window.speechSynthesis.speaking) {
      console.log(message.target);
      const resp = message.target.parentNode.children[1].textContent;
      let respSynthesis = new SpeechSynthesisUtterance(resp);
      window.speechSynthesis.speak(respSynthesis);
    }
  }

  render()
  {
    return (
      <div>
        <button onClick={e => this.synthesize(e)}
                style={{display: "inline-block"}}>
          READ
        </button>
        <p style={{display: "inline-block"}}>{this.props.content}</p>
      </div>
    );
  }
}

export default AgentResponse;
