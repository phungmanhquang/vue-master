<template>
  <div>
    login page
    {{ listIds }}
    <ul>
      <li v-for="(item, index) in listIds" :key="index">
        {{ item.id }} - {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "loginPage",
  data() {
    return {
      listIds: [{ id: 1 }, { id: 2 }, { id: 3 }],
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getName(id) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("post name" + id);
        }, 1000 * id);
      });
    },
    async handlerGetName(item, index) {
      const res = await this.getName(item.id);
      this.listIds[index].loading = res;
    },
    getData() {
      for (let index = 0; index < this.listIds.length; index++) {
        const element = this.listIds[index];
        element.loading = true;
        this.getName(element.id).then((res) => {
          console.log("res ", res, element);
          element.name = res;
          element.loading = false;
        });
      }
      // this.listIds.forEach((item, index) => {
      //   this.handlerGetName(item, index);
      // });
    },
  },
};
</script>

<style></style>
