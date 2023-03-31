<template>
  <div>
    <button @click="changeRouter">changeRouter</button>
    <table border="1">
      <thead>
        <th v-for="header in headers" :key="header.key">{{header.label}}</th>
      </thead>
      <tbody>
        <template v-for="item in items">
          <tr :key="item.id">
            <td v-for="header in headers" :key="item.id + header.key">
              {{ item[header.key] }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {key: 'id', label: 'ID', showToolTip: true},
        {key: 'name', label: 'Name'},
        {key: 'age', label: 'Age'},
      ],
      items: [
        {id: {tooltip: '', value: '123123'}, name: "join", age: 10},
        {id: 2, name: "linda", age: 12}
      ]
    }
  },
  methods: {
    changeRouter() {
      this.$router.push({
        name: "render-conversation",
        hash: "#hashTest",
        append: "123123"
      })
    }
  }
}
</script>

<style>

</style>