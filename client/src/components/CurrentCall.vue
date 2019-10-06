<template>

  <div>
    
    <h3>Call Status: <span :class=" statusClass( contact.status ) "> {{ statusText( contact.status ) }}</span></h3>
    <h5>From Number: {{ contact.phone || 'n/a' }}</h5>
    <h5 class="text-muted">From Queue: {{ contact.fromQueue || 'NO QUEUE' }}</h5>

    <contact-form :contact=" contact.attributes "/>
  </div>
</template>

<script>

    import ContactForm from '../components/Forms/ContactForm';

    export default {

        props : {

            contact : Object
        },
        methods: {

            statusText( status ){

                if( !status ) return 'NO CALL';

                return status.toUpperCase();
            },
            statusClass( status ){

                if( !status ) return 'text-muted';

                if( status == 'ended' ) return 'text-danger';


                return 'text-primary';
            }
        },
        components: {

            ContactForm
        }
    }
</script>

<style scoped>

</style>