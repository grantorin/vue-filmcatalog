<template lang="pug">
  .container
    .row
      h5 New User Registration
      form.col.s12(@submit.prevent="onSubmit")
        .row
          .input-field.col.s6
            i.prefix.material-icons account_circle
            input#login.validate(type="text" v-model="login" required)
            label(for="login" data-error="Login is required") Login
          .input-field.col.s6
            i.prefix.material-icons email
            input#email.validate(type="email" v-model="email" ref="email" required)
            label(for="email" data-error="Email is required") Email

        .row
          .input-field.col.s6
            i.prefix.material-icons fingerprint
            input#password.validate(type="password" v-model="pass" required)
            label(for="password") Password
          .input-field.col.s6
            i.prefix.material-icons fingerprint
            input#password_c.validate(type="password" v-model="passc" ref="passc" required)
            label(for="password_c" data-error="Passwords do not match") Confirm Password

        button.btn.waves-effect.waves-light.red(type="reset" name="reset" @click="onReset")
          | Reset
          i.material-icons.right clear
        button.right.btn.waves-effect.waves-light.waves-effect(type="submit" name="send")
          | Submit
          i.material-icons.right send
</template>

<script>
export default {
  data() {
    return {
      login: '',
      email: '',
      pass: '',
      passc: ''
    }
  },

  methods: {
    validate(e) {

    },
    onReset() {
      for (const key in this.$data) {
        if (this.$data.hasOwnProperty(key)) {
          this.$data[key] = '';
        }
      }
    },
    onSubmit() {
      let formCompleted = false;
      for (const key in this.$data) {
        if (this.$data.hasOwnProperty(key) && this.$data[key]) {
          formCompleted = true;
          break;
        }
      }

      if(formCompleted) {
        if(!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
          this.$refs.email.classList.add('invalid');
          return;
        } else {
          this.$refs.email.classList.remove('invalid');
        }
        if(this.pass !== this.passc) {
          console.log(this.$refs.passc);
          this.$refs.passc.classList.remove('valid');
          this.$refs.passc.classList.add('invalid');
          return;
        } else {
          this.$refs.passc.classList.remove('invalid');
        }

        this.$store.dispatch('registerUser', {
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

<style>

</style>>
