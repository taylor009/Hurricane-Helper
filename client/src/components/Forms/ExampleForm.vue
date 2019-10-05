<template>

  <b-form @submit.prevent=" submitForm " @reset=" resetForm " v-if=" show ">

      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
        description="We'll never share your email with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Food:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.food"
          :options="foods"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-4">

        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">

          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group>

      <b-button type="submit" variant="primary" class="mr-2">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
</template>

<script>

    export default {

        data: () => ({

            formModel : {

                email : '',
                name : '',
                food : null,
                checked : []
            },
            form : {},
            foods : [

                { text: 'Select One', value: null },
                { text: 'Thing One', value: 'uno' },
                { text: 'Thing Two', value: 'dos' },
                { text: 'Thing Three', value: 'tres' },
            ],
            show : true
        }),
        methods : {

            submitForm(){

                console.log( 'you submitted: ', this.form );
            },
            setForm(){

                this.form = _.cloneDeep( this.formModel );
            },
            resetForm( evt ) {

                evt.preventDefault()

                // Reset our form values
                this.setForm();

                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {

                    this.show = true;
                })
            }
        },
        created(){

            this.setForm();
        }
    }
</script>

<style scoped>


</style>