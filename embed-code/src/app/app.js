import ChatBox from "./modules/chatBox";

class App_liveChat {
  constructor() {
    this.ChatBoxModule = new ChatBox()
  }
  init() {
    this.ChatBoxModule.renderChatBox()
  }
}

export default App_liveChat