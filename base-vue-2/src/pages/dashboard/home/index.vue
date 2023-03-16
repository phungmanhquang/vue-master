<template>
  <div v-if="false">
    home page
    <br />
    <button @click.once="randomNumber">random</button>
    <div v-tooltip="'tooltip'" v-once>numRandom - {{ numRandom }}</div>
    <div>{{ 12.33333 | currency }}</div>

    <div class="scroll"></div>

    <input type="checkbox" v-model="toggle" true-value="yes" false-value="no" />

    <input v-model.number="age" />
    <div style="margin: 25px; border: 1px solid; padding: 20px">
      username - {{ username }}
      <base-input
        label="Username:"
        v-model="username"
        required
        placeholder="Enter your username"
      />
    </div>
    <slot-component
      home="home"
      style="color: red"
      class="slot-test"
      data-status="activated"
    >
      <template #header="headerProps">
        <pre>{{ headerProps }}</pre>
        <div>Header slot</div>
        <button @click="headerProps.headerAction">header action</button>
      </template>
    </slot-component>

    keep alive 1<br />
    <button @click="onChangeTab">change tab</button>
    <keep-alive :include="['BaseInput1', 'BaseInput1']">
      <component :is="tab" />
    </keep-alive>
  </div>
  <div v-else>
    <prop-sync v-if="false" />
    <slot-component home="home" data-status="activated">
      <template #footer>
        <div>footer</div>
      </template>
      <template #header="{ on, attrs }">
        attrs
        <p v-bind="attrs"></p>
        on
        <div>{{ on }}</div>

        <!-- <button @click="headerProps.headerAction">header action</button> -->
      </template>
    </slot-component>
  </div>
</template>

<script>
import UserService from "@/service/user";
import BaseInput from "@/components/BaseInput.vue";
import SlotComponent from "@/components/SlotComponent.vue";
import PropSync from "@/components/PropSync.vue";

export default {
  components: { BaseInput, SlotComponent, PropSync },
  name: "homePage",
  data() {
    return {
      numRandom: 0,
      toggle: false,
      age: 0,
      tab: "BaseInput1",
      username: "",
    };
  },
  created() {
    this.getUsers();
    this.numRandom = this.$mixinGlobalRandomNumber(1, 100);
  },
  methods: {
    onChangeTab() {
      this.tab = this.tab === "BaseInput1" ? "BaseInput2" : "BaseInput1";
    },
    randomNumber() {
      this.numRandom = this.$mixinGlobalRandomNumber(1, 100);
    },
    async getUsers() {
      // eslint-disable-next-line no-unused-vars
      const res = await UserService.get();
    },
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
  },
};
</script>

<style lang="scss">
.scroll {
  max-height: 200px;
  overflow-x: auto;
}
</style>
