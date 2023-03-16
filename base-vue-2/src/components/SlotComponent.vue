<template>
  <div>
    <slot name="header" :attrs="$attrs" :headerAction="headerAction" />
    <slot name="body" />
    <slot name="footer" />
  </div>
</template>

<script>
export default {
  name: "slotComponent",
  props: {
    validation: {
      type: Object,
    },
  },
  data() {
    return {
      headerTitle: "header title 123",
    };
  },
  methods: {
    headerAction() {
      console.log("headerAction() run");
    },
  },
};
</script>

<style></style>
