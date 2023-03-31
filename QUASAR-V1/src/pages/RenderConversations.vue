<template>
  <div class="conversation">
    <div v-for="(item, index) in listConversation" :key="index">
      <span style="display: none">
        <!-- {{
          item.isBot !== botMessage && count !== 0
            ? ((classNameObj[index - 1] = "end"),(classNameObj[index] = "start"))
            : 0
        }}
        {{
          item.isBot === botMessage && count !== 0
            ? (classNameObj[index - 1] = "center")
            : 0
        }} -->
        <!-- {{
          item.isBot !== botMessage ? ((count = 0), (botMessage = item.isBot)) : count++
        }} -->
        {{ item.isBot !== botMessage ? (classNameObj[index] = "start") : 0 }}
        {{ item.isBot === botMessage ? (classNameObj[index] = "center") : 0 }}
        {{ item.isBot !== botMessage ? (botMessage = item.isBot) : 0 }}
      </span>
      <div :class="{ left: botMessage, [classNameObj[index]]: true }">
        {{ item.message }} {{ count }} {{ classNameObj[index] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listConversation: [
        { isBot: false, message: "person message" },
        { isBot: true, message: "bot message" },
        { isBot: false, message: "person message" },
        { isBot: true, message: "bot message" },
        { isBot: true, message: "bot message" },
        { isBot: false, message: "person message" },
        { isBot: false, message: "person message" },
        { isBot: false, message: "person message" },
        { isBot: false, message: "person message" },
      ],
      botMessage: null,
      count: 0,
      classNameObj: {},
    };
  },
};
</script>

<style>
.conversation {
  padding: 20px;
  max-width: 500px;
  background: rgba(54, 53, 53, 0.247);
}
.item {
  background: #fff;
}
.left {
  margin-left: auto;
  width: fit-content;
}
</style>
