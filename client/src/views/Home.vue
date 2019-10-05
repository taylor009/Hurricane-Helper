<template>
  <div>
    <div class="home d-flex flex-column justify-content-between">
      <div class="home-top-half">
        <h1>This is the Home Page</h1>
      </div>

      <div class="home-bottom-half d-flex justify-content-between">
        <div class="signup signup-user">
          <a href>User Signup</a>
        </div>
        <div class="signup signup-volunteer">
          <a href>Volunteer Signup</a>
        </div>
        <div class="signup signup-organization">
          <a href>Organization Signup</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
.home {
  margin: 2.5%;
  /* height: 500px; */
  height: 100%;
}
</style>