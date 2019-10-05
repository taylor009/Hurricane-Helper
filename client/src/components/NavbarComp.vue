<template>
  <b-nav id="nav" class="d-flex align-items-center">
    <b-nav-item to="/">Home</b-nav-item>
    <b-nav-item to="/about">About</b-nav-item>
  </b-nav>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
#nav {
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
</style>