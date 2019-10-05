<template>
  <div id="app">

    <navbar />
    <div id="nav">

      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>


      <b-container>

        <b-row>

          <b-col>

            <div id="containerDiv" style="width: 320px; min-width: 200px; height: 465px; min-height: 400px; ">

              <!--Amazon CCP will go here-->
            </div>
          </b-col>
          <b-col>

            <router-view/>
          </b-col>
        </b-row>
      </b-container>
  </div>
</template>

<script>

  import Navbar from './components/Navbar';

  export default {

    data: () => ({

      ccpUrl: "https://pbt-hackathon.awsapps.com/connect/ccp#", //replace with the CCP URL for your Amazon Connect instance
    }),
    mounted(){

      connect.core.initCCP( containerDiv, {

        ccpUrl     : this.ccpUrl,
        loginPopup : true,
        softphone  : {

            allowFramedSoftphone: true
        }
      });
    },
    components : {

      Navbar
    }
  }
</script>

<style lang="scss">

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  #nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
