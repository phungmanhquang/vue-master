<template>
  <div>
    <q-btn label="show" @click="onShow" />
    <q-dialog
      v-model="isShow"
      position="bottom"
    >
      <q-card style="width: 350px">
        <q-linear-progress :value="0.6" color="pink" />

        <q-card-section class="row items-center no-wrap">
          <div>
            <div class="text-weight-bold">The Walker</div>
            <div class="text-grey">Fitz & The Tantrums</div>
          </div>

          <q-space />

          <q-btn flat round icon="fast_rewind" />
          <q-btn flat round icon="pause" />
          <q-btn flat round icon="fast_forward" />
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "BottomSheetPage",

  data() {
    return {
      isShow: false
    }
  },

  methods: {
    onShow() {
      this.isShow = true
    }
  }
}
</script>

<style>

</style>