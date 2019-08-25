<template lang="pug">
  .container
    .row
      form.col.s12(@submit.prevent="onSubmit")
        .row
          .col.s12.l6.offset-l3
            h5 Authorization
            .input-field.s12
              i.prefix.material-icons email
              input#login.validate(type="email" v-model="email" required)
              label(for="login") E-mail
            .input-field.s12
              i.prefix.material-icons fingerprint
              input#password.validate(type="password" v-model="pass" required)
              label(for="password") Password

            button.right.btn.waves-effect.waves-light(type="submit")
              | Login
              i.material-icons.right send
</template>

<script>
export default {
  data() {
    return {
      email: '',
      pass: ''
    }
  },

  methods: {
    onSubmit() {
      let formCompleted = false;
      for (const key in this.$data) {
        if (this.$data.hasOwnProperty(key) && this.$data[key]) {
          formCompleted = true;
          break;
        }
      }

      if(formCompleted) {
        this.$store.dispatch('loginUser', {
          email: this.email,
          password: this.pass
        })
        .then( () => {
          this.$router.push('/')
        })
        .catch(err => {
          // eslint-disable-next-line no-undef
          Materialize.toast(err.message, 6000)
        })
      }
    }
  }
}
</script>
