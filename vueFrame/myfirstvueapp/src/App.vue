<template>
  <div>
    <input type="text" v-model="todo">
    <button @click="addToDO" v-if="items.length !== 10">Add new ToDo</button>
    <ul v-for="(item, i) in items" :key= 'i'>
      <li>{{item}}</li>
      <button @click="removeToDo(i)">Remove</button>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      items: [],
      todo: '',
    }
  },
  methods: {
    addToDO() {
      this.items.push(this.todo);
      this.todo= '';
      console.log(this.items);
    },
    removeToDo(i){
      this.items.splice(i, 1)
    }
  }
}
</script>

<style>
</style>
