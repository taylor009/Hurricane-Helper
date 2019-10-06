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
                        type="phone"
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
                        required
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-button type="submit" variant="primary">Submit</b-button>
    </b-form>
</template>

<script>

    export default {

        props : {

            contact : Object
        },
        methods: {

            onSubmit(){

                console.log( 'submitting lmao..' );
            }
        }
    }
</script>

<style scoped>

</style>