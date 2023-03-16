<template>
  <div style="margin-bottom: 15px">
    {{ title }}
    <pre>{{ formData }}</pre>
    <input
      v-model="formData.firstName"
      type="text"
      style="margin-right: 10px"
    />

    <input v-model="formData.lastName" type="text" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    title: {
      type: String,
      default: "",
    },
  },
  data() {
    return { formData: JSON.parse(JSON.stringify(this.value)) };
  },
  watch: {
    formData: {
      handler(val) {
        this.$emit("input", val);
      },
      deep: true,
    },
  },
};
</script>

<style></style>
