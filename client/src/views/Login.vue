<template>

    <b-container>

        <b-row class="h-100 d-flex align-items-center justify-content-center">
          
            <b-col class="">

                <form-example />
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

import FormExample from '../components/Forms/LoginForm';

    export default {

        data: () => ({

            mounted : false,
            ccpUrl: "https://pbt-hackathon.awsapps.com/connect/ccp#", //replace with the CCP URL for your Amazon Connect instance
        }),
        mounted(){

            if( !this.mounted ){

                connect.core.initCCP( containerDiv, {

                    ccpUrl     : this.ccpUrl,
                    loginPopup : true,
                    softphone  : {

                        allowFramedSoftphone: true
                    }
                });

                this.mounted = true;
            }
        },
        components : {

            FormExample
        }
    }
</script>

<style scoped>

</style>