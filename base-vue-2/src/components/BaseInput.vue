<template>
  <label>
    {{ label }}
    <input
      v-bind="$attrs"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </label>
</template>

<script>
export default {
  inheritAttrs: false,
  name: "baseInput",
  props: ["label", "value"],
};
</script>

<style></style>
