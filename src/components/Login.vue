<template>
  <form class="form w-50 ml-auto mr-auto">
    <div class="form-group">
      <label>Email</label>
      <input class="form-control" type="email" v-model="email" placeholder="abc@123.com" />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input class="form-control" type="password" v-model="password" placeholder="****" />
    </div>
    <button @click.prevent="login" class="form-control btn btn-success">Login</button>
  </form>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
import { SessionService } from "../services";
import { Import } from "vue-di-attributes";
import { Component } from "vue-property-decorator";
import { Mutation } from "vuex-class";
import { SET_AUTH } from "../store/mutation-types";
@Component({
  name: "Login"
})
export default class Login extends Vue {
  @Import() sessionService: SessionService;

  @Mutation(SET_AUTH) setAuth;

  email = "";
  password = "";

  login() {
    this.sessionService.Login(this.email, this.password).then(token => {
      this.setAuth(token);
      this.$router.push("/");
    });
  }
}
</script>

<style scoped>

</style>
