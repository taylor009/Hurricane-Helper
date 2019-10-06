<template>
<div class="background-image">
    <div class="home d-flex flex-column justify-content-between container">
      <div class="home-top-half row">
        <div class="col-12">
          <h1>Welcome to EDNA!</h1>
          <h3>Your in depth guide to hurricane safety and support. </h3>
          <h5>Why you should sign up!</h5> 
          <p>
            Every hurricane season, many of our residents are inadequately prepared for hurricanes. 
            It is our mission to ensure that all of our residents are safe. By signing up to our system, you will be able to automatically inform your loved ones of any potential dangers as soon as leading experts recognise any threat.
          </p>
          <h5>Why you should volunteer!</h5>
          <p>
            There are many reasons to give to a cause, but we want to enable and encourage anyone to support in disaster relief. By volunteering with Hurricane Helper, you will be able to connect people in need with the relief and services they need. 
          </p>
        </div>
      </div>

      <div class="home-bottom-half row text-center">
        <div class="signup signup-user col-sm-12 col-md-4">
          <router-link to="/signup">User Signup</router-link>
        </div>
        <div class="signup signup-volunteer col-sm-12 col-md-4">
          <router-link to="/signup">Volunteer Signup</router-link>
        </div>
        <div class="signup signup-organization col-sm-12 col-md-4">
          <router-link to="/signup">Organization Signup</router-link>
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
.background-image {
  padding: 0;
  height: 100%;
  background-image: url("../../src/assets/hurricane-home.jpg");
}
.home {
  padding: 4.5%;
  height: 100%;
  background-color: white;
}

p {
  margin: 2.5% 0;
}
</style>