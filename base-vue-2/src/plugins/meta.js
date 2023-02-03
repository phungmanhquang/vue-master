export default {
  install(Vue) {
    Vue.prototype.$meta = {
      // set document title
      setDocumentTitle(value) {
        if (!document.title) {
          const titleEl = document.createElement("title");
          document.head.appendChild(titleEl);
        }
        const prefix = process.env.VUE_APP_META_TITLE_PREFIX;
        document.title = prefix ? prefix + " | " + value : value;
      },
    };
  },
};
