<template>
  <div id="login">
    <div class="container">
      <div class="logo">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
      <h1>Login</h1>

      <input type="email" placholder="Email" v-model="email" />
      <br />
      <input type="password" placholder="Password" v-model="password" />
      <br />
      <button @click="login">Login</button>
      <p>
        Need an account?
        <router-link to="/signup"></router-link>
      </p>
    </div>
  </div>
</template>


<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login: function () {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          (user) => {
            console.log(user.data);
          },
          (err) => {
            alert(err);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>