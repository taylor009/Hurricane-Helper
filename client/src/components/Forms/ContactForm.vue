<template>

    <b-form @submit.prevent=" onSubmit ">

        <b-row>

            <b-col>

                <b-form-group
                    label="First Name:"
                    label-for="first-name"
                >
                    <b-form-input
                        id="first-name"
                        v-model=" contact.first "
                        type="text"
                        required
                    ></b-form-input>
                </b-form-group>
            </b-col>

            <b-col>

                <b-form-group
                    label="Last Name:"
                    label-for="last-name"
                >
                    <b-form-input
                        id="last-name"
                        v-model=" contact.last "
                        type="text"
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-form-group
            label="Address:"
            label-for="address"
        >
            <b-form-input
                id="address"
                v-model=" contact.address "
                type="text"
            ></b-form-input>
        </b-form-group>

        <b-form-group
            label="Language:"
            label-for="language"
        >
            <b-form-select v-model=" contact.language " :options=" languages "></b-form-select>
        </b-form-group>

        <b-form-textarea
            v-model=" contact.notes "
            placeholder="Call notes..."
            rows="3"
            max-rows="6"
        ></b-form-textarea>

        <h5 class="text-muted my-4">{{ contact.prompt }}</h5>

        <b-row class="justify-content-space-between align-items-center">

            <b-col>

                <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
                <b-button type="button" variant="default" @click=" fakeNews() ">Demo Data</b-button>
            </b-col>

            <span :class=" contactFoundColor( contact.found ) " class="mr-3"><b>{{ contactFoundStatus( contact.found ) }}</b></span>
        </b-row>
    </b-form>
</template>

<script>

    import { mapActions } from 'vuex';
    import axios from 'axios';

    export default {

        props : [

            'contact'
        ],
        data: () => ({

            languages : [

                { value: '', text: 'Please select a language' },
                { value: 'EN', text: 'English' },
                { value: 'ES', text: 'Spanish' },
            ],
            firstNames : [

                'Jimmy',
                'James',
                'Jason',
                'Jaxton',
                'Albert',
                'Sal',
                'Godfrey'
            ],
            lastNames : [

                'Ashton',
                'Ableton',
                'Alexander',
                'Axel',
                'Baxter',
                'Lastly',
                'Egerton'
            ]
        }),
        methods: {

            ...mapActions({

                pushContact : 'pushContact'
            }),

            onSubmit(){

                const formattedContact = {

                    "address" : {

                        "city"  : "Boca Raton",
                        "line1" : "1337 Glades Road",
                        "state" : "FL",
                        "zip"   : "33487"
                    },
                    "firstName" : this.contact.first,
                    "key"       : this.contact.phone,
                    "language"  : this.contact.language,
                    "lastName"  : this.contact.last,
                    "notes"     : this.contact.notes
                };

                console.log( 'submitting lmao..', formattedContact );

                axios.post( 'https://g7kd6chmv2.execute-api.us-east-1.amazonaws.com/dev/users', formattedContact )
                    .then( res => {

                        console.log( 'response: ', res );
                    })
                    .catch( err => {

                        console.error( 'error: ', err );
                    })
                    .finally( () => {

                        this.pushContact( _.cloneDeep( this.contact ) );
                        this.fakeNews( true );
                    });
            },
            fakeNews( clear = false ){

                this.contact.address  = clear ? '' : '1337 Glades Road, Boca Raton, FL, 33431';
                this.contact.first    = clear ? '' : _.sample( this.firstNames );
                this.contact.language = clear ? '' : 'EN';
                this.contact.last     = clear ? '' : _.sample( this.lastNames );
                this.contact.notes    = clear ? '' : 'These are sample notes from our interaction on the quick-spawn, low cost volunteer-driven telephony overflow system for municiple emergency response',
                this.contact.phone    = clear ? '' : '+15616999715';
            },
            contactFoundStatus( status ){

                if( status === null ) return '';
                return status ? 'Return Visitor' : 'New Caller to System';
            },
            contactFoundColor( status ){

                return status ? 'text-primary' : 'text-info';
            }
        }
    }
</script>

<style scoped>

</style>