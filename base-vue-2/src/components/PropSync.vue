<template>
  <div style="margin-top: 50px">
    prop sync
    <hr />
    data form -
    <pre> {{ dataForm }} </pre>
    <prop-sync-input v-model="dataForm" title="Data form" />
    <!-- <prop-sync-input title="Email" /> -->
  </div>
</template>

<script>
import PropSyncInput from "./PropSyncInput.vue";
export default {
  components: { PropSyncInput },
  data() {
    return {
      dataForm: {
        firstName: "",
        lastName: "",
      },
    };
  },
};
</script>

<style></style>
