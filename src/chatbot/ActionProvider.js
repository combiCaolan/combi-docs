class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet() {
    const msg = this.createChatBotMessage("Hello! Ask me anything about the docs.");
    this.addMessageToState(msg);
  }

  help() {
    const msg = this.createChatBotMessage("You can ask about commands, features, or where to find information.");
    this.addMessageToState(msg);
  }

  echo(userMsg) {
    const msg = this.createChatBotMessage(`You said: "${userMsg}"`);
    this.addMessageToState(msg);
  }

  addMessageToState(message) {
    this.setState(prev => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  }
}

export default ActionProvider;