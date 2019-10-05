<template>

    <b-container>

      <b-row>

        <b-col>

          <div id="containerDiv" style="width: 320px; min-width: 200px; height: 465px; min-height: 400px; ">

            <!--Amazon CCP will go here-->
          </div>

        </b-col>
        <b-col>

            helloooo
        </b-col>
      </b-row>
    </b-container>
</template>

<script>

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
    }
</script>

<style scoped>

</style>