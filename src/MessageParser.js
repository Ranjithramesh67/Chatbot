class MessageParser {
    constructor(actionProvider) {
      this.actionProvider = actionProvider;
    }
  
    parse(message) {
      const msg = message.toLowerCase()
      
      if ((msg.includes("hello")) || (msg.includes("hi")) || (msg.includes("hai"))) {
        this.actionProvider.greet()
      }
    }
  }
  
  export default MessageParser