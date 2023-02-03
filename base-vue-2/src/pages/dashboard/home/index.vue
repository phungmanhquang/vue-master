<template>
  <div>
    home page
    <br />
    <div v-tooltip="'tooltip'">numRandom - {{ numRandom }}</div>
    <div>{{ 12.33333 | currency }}</div>
  </div>
</template>

<script>
import UserService from "@/service/user";

export default {
  name: "homePage",
  data() {
    return {
      numRandom: 0,
    };
  },
  created() {
    this.getUsers();
    this.numRandom = this.$mixinGlobalRandomNumber(1, 100);
  },
  methods: {
    async getUsers() {
      // eslint-disable-next-line no-unused-vars
      const res = await UserService.get();
    },
  },
};
</script>

<style></style>
