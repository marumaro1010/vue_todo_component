<template>
  <div id="app">
    <h2>TODO LIST</h2>
    <todofliter></todofliter>
    <todoinput v-on:AddChild="addChildMethod"></todoinput>
    <todolist :todos="todos"></todolist>
  </div>
</template>

<script>
import Vue from 'vue';
import Todolist from './components/todo-list.vue';
import Todofliter from './components/todo-fliter.vue';
import Todoinput from './components/todo-input.vue';

Vue.component('todolist', Todolist);
Vue.component('todoinput',  Todoinput);
Vue.component('todofliter',  Todofliter);

export default {
  name: 'app',
  data()
  {
    return{
      id:0,
      todos:[]
    }
  },
  methods:
  {
    addChildMethod(msg)
    {
      this.todos.push({
        id: this.id++,
        value: msg,
        complete:false,
        edit:false
      });
    }
  }
}
</script>

<style>
</style>
