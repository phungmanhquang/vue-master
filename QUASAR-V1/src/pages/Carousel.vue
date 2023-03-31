<template>
  <div>
    {{listImage}}
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-color="primary"
      navigation
      padding
      arrows
      height="300px"
      class="bg-grey-1 shadow-2 rounded-borders"
    >
      <q-carousel-slide
        v-for="(item, index) in listImage"
        :key="index"
        :name="index"
        class="column no-wrap"
      >
        <div
          class="row fit justify-start items-center q-gutter-xs q-col-gutter no-wrap"
        >
          <q-img class="rounded-borders col-6 full-height" :src="item" />
          <q-img
            native-context-menu
            not-draggable
            class="rounded-borders col-6 full-height"
            :src="item"
          >
            <div>
              With native context menu and not draggable - can be swiped
            </div>
          </q-img>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      slide: null,
      listImage: [],
    };
  },
  created() {
    this.setValueListImage()
  },
  methods: {
    setValueListImage() {
      setInterval(() => {
        this.listImage = [
          "https://cdn.quasar.dev/img/mountains.jpg",
          "https://cdn.quasar.dev/img/parallax2.jpg",
          "https://cdn.quasar.dev/img/cat.jpg",
          "https://cdn.quasar.dev/img/material.png",
        ];
      }, 2000);
    },
  },
};
</script>

<style></style>
