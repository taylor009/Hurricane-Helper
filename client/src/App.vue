<template>
  <div id="app">
    <navbar-comp style="height: 75px" />

    <keep-alive>

      <router-view style="padding-top: 75px; padding-bottom: 95px; height: 100vh" />
    </keep-alive>

    <footer-comp style="height: 95px" />
  </div>
</template>

<script>
import NavbarComp from "./components/NavbarComp";
import FooterComp from "./components/FooterComp";

export default {
  data: () => ({}),

  components: {
    NavbarComp,
    FooterComp
  }
};
</script>

<style lang="scss">
html,
body,
#app {
  min-height: 100vh;
  margin: 0;
  padding: 0;

  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  background-color: #f3f6f9;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
