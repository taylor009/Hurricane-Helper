<template>

    <b-container>

      <b-row class="h-100 d-flex align-items-center justify-content-center">

        <b-col>

          <div id="containerDiv"><!--Amazon CCP will go here--></div>

        </b-col>
        <b-col class="">

            <form-example />
        </b-col>
      </b-row>
    </b-container>
</template>

<script>

    import FormExample from '../components/Forms/ExampleForm';

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

            FormExample
        }
    }
</script>

<style scoped>

    #containerDiv {

        width      : 320px;
        min-width  : 320px;
        height     : 470px;
        min-height : 470px;
    }
</style>