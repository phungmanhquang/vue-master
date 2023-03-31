<template>
  <div class="intro-page">
    <button @click="gotoHome">Go to home</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import RouterName from "../../common/constant/RouterName";

const router = useRouter();

const gotoHome = () => {
  router.push({ name: RouterName.dashboardLayout.root });
};
</script>

<style scoped>
.intro-page {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
