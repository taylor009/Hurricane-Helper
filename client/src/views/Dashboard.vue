<template>

    <b-container>

        <b-row class="mt-4">

            <b-col lg="4" sm="12" class="my-1 d-flex justify-content-center">

                <div id="containerDiv"><!--Amazon CCP will go here--></div>

            </b-col>
            <b-col lg="4" sm="6" class="my-1">

                <b-card header="Log Messages">

                    <b-list-group class="list-group">

                        <b-list-group-item v-for=" ( msg, i ) in logMessages " :key=" i ">

                            {{ msg }}
                        </b-list-group-item>
                    </b-list-group>
                </b-card>
            </b-col>
            <b-col lg="4" sm="6" class="my-1">

                <b-card header="Event Messages">

                    <b-list-group class="list-group">

                        <b-list-group-item v-for=" ( msg, j ) in eventMessages " :key=" j ">

                            {{ msg }}
                        </b-list-group-item>
                    </b-list-group>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    import FormExample from '../components/Forms/ExampleForm';
    import AwsConnect from '../mixins/aws-connect';

    export default {

        data: () => ({

        }),
        mixins : [

            AwsConnect
        ],
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