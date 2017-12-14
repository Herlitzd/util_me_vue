<template>
  <form>
    <input placeholder="UserName..."/>
    <button class="btn btn-success">Login</button>
  </form>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
@Component({
  name: 'Login'
})
export default class Login extends Vue {
}
</script>

<style scoped>
</style>
