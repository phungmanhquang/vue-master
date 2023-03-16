<template>
  <div>
    <h1>Base input 2</h1>
    <label>
      {{ label }}
      <input
        key="123"
        v-bind="$attrs"
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "baseInput",
  inheritAttrs: true,
  props: ["label", "value"],
};
</script>

<style></style>
