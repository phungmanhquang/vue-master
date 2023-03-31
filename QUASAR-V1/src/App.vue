<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',

  watch: {
    '$route'(val) {
      console.log("$route ::: ", val);
    }
  }
}
</script>
