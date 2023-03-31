<template>
  <div>login

    <a :href="pathScrollTo">scroll</a> <br>
    <router-link to="#link" ></router-link>
    <div class="block-1"></div>
    <div id="link" class="block-2"></div>
  </div>
</template>

<script>
export default {
  computed: {
    pathScrollTo() {
      return this.$route.path + '#link'
    }
  }
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
.block-1 {
  width: 100%;
  height: 100vh;
  background: rgba(255, 0, 0, 0.178);
}
.block-2 {
  width: 100%;
  height: 100vh;
  background: rgba(0, 255, 255, 0.178);
}
</style>
