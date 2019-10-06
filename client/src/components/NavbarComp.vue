<template>

  <b-nav id="nav" class="d-flex align-items-center">
    <img id="logo" src="../../src/assets/edna-logo.png" alt="logo">
    <b-nav-item to="/">Home</b-nav-item>
    <b-nav-item to="/dashboard">Dashboard</b-nav-item>

    <b-nav-item to="/login">Login</b-nav-item>
  </b-nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">

  #nav {

    z-index: 100;
    position: fixed;
    width: 100%;
    background-color: white;
    box-shadow: 0px 2px 5px 0px #ccc;

    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  #logo {
    height: 50px;
  }
</style>