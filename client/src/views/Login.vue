<template>

    <b-container class="d-flex align-items-center">

        <b-row class="w-100">

            <b-col lg="6" offset-lg="3" md="8" offset-md="2">

                <login-form />

            </b-col>
        </b-row>
    </b-container>
</template>

<script>

    import LoginForm from '../components/Forms/LoginForm';

    export default {

        components : {

            LoginForm
        }
    }
</script>

<style scoped>

</style>