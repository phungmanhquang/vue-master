
import App_liveChat from "./app/app";

(function(_window){
  
  const _init = () => { 
    const aipLiveChat = new App_liveChat();
    aipLiveChat.init()
  }
  
  _window.App_liveChat = {
    init: _init
  }
})(window)