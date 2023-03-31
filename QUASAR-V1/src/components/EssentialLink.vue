<template>
  <q-item
    :to="name"
    clickable
    tag="a"
  >
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption>
        {{ path }}
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    },

    name: {
      type: String,
      default: ''
    },
      
    path: {
      type: String,
      default: ''
    }
  }
}
</script>
