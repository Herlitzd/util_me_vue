<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{apple}}</h1>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component({
  name: 'App'
})
export default class App extends Vue {
  apple = 'Something cool';
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
