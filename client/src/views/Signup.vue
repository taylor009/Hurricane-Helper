<template>

    <b-container class="d-flex align-items-center">

        <b-row class="w-100">

            <b-col lg="6" offset-lg="3" md="8" offset-md="2">

                <signup-form />

            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    import SignupForm from '../components/Forms/SignupForm';

    export default {

        components : {

            SignupForm
        }
    }
</script>

<style scoped>

</style>