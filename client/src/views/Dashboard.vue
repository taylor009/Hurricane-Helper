<template>

    <b-container>

        <b-row class="mt-4">

            <b-col lg="4" class="my-2 d-flex flex-column align-items-center">

                <div id="containerDiv"><!--Amazon CCP will go here--></div>
                <h3 class="mt-2">Agent: {{ agent.name || 'Offline' }}</h3>
                <h5>Status: {{ agent.status || 'n/a' }}</h5>

            </b-col>
            <b-col lg="8" class="my-2">

                <b-card no-body>

                    <b-tabs card class="tabs-group">

                        <b-tab title="Current Call" active>

                            <current-call :contact=" currentContact " />
                        </b-tab>
                        <b-tab title="Directory">
                            <directory-comp />
                        </b-tab>
                        <b-tab title="Status Log">

                            <b-list-group class="list-group">

                                <b-list-group-item v-for=" ( msg, i ) in logMessages " :key=" i ">

                                    {{ msg }}
                                </b-list-group-item>
                            </b-list-group>
                        </b-tab>
                        <b-tab title="Event Log">

                            <b-list-group class="list-group">

                                <b-list-group-item v-for=" ( msg, j ) in eventMessages " :key=" j ">

                                    {{ msg }}
                                </b-list-group-item>
                            </b-list-group>
                        </b-tab>
                    </b-tabs>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    import FormExample from '../components/Forms/ExampleForm';
    import CurrentCall from '../components/CurrentCall';
    import AwsConnect from '../mixins/aws-connect';
    import DirectoryComp from '../components/DirectoryComp';

    /**
     * {"ADDRESS":{"name":"ADDRESS","value":"Home Depot Hackathon, Boca Raton, FL 33487"},"FIRST_NAME":{"name":"FIRST_NAME","value":"Alex"},"FOUND":{"name":"FOUND","value":"true"},"HAS_PROMPT":{"name":"HAS_PROMPT","value":"true"},"LANGUAGE":{"name":"LANGUAGE","value":"EN"},"LAST_NAME":{"name":"LAST_NAME","value":"Ciccolella"},"PROMPT":{"name":"PROMPT","value":"Your address on Home Depot Hackathon has recently been cleared of Hurricane warning status."}}
     */

    export default {

        data: () => ({
            
        }),
        mixins : [

            AwsConnect
        ],
        components : {

            FormExample,
            DirectoryComp,
            CurrentCall
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

    .tabs-group {

        height: 100%;
    }

    
</style>