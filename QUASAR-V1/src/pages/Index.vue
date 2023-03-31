<template>
  <q-page class="flex flex-center">
    <div>
      <div>{{ number }}</div>
      <q-input v-model="number" type="number" outlined v-format-currency />
      <q-btn @click="setNumber">set</q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    setNumber() {
      this.number += 1
    }
  }
};
</script>
