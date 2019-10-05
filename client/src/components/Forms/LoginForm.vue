<template>
  <b-container>
    <b-row>
      <b-col offset-md="2" md="8" offset-lg="4" lg="4">
            
        <b-form @submit="onSubmit">
          <b-form-group
            id="input-group-1"
            label="Phone:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.phone"
              type="phone"
              required
              placeholder="Enter phone"
            ></b-form-input>
          </b-form-group>

          <b-form-group id="input-group-2" label="Password:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.password"
              required
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>

          <b-button type="submit" variant="primary">Submit</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  export default {
    data() {
      return {
        form: {
          phone: '',
          password: '',
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      }
    }
  }
</script>