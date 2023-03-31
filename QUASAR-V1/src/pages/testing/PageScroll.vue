<template>
  <div class="wrapper">
    <div id="inner1" class="inner">
      <button @click="scrollTo">scroll</button>
    </div>
    <div id="inner2" class="inner">Content 2</div>
    <div id="inner3" class="inner">Content 3</div>
    <div id="inner4" class="inner">Content 4</div>
    <div id="inner5" class="inner">Content 1</div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollTo() {
      this.$router.replace({
        hash: "#inner4"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  background: #ccc;
  padding: 24px;
  .inner {
    height: 760px;
    background: #1d1d1d25;
    padding: 24px;
    margin-bottom: 24px;
  }
}
</style>