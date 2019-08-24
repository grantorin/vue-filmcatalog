<template lang="pug">
  .container
    .row
      h5 Authorization
      form.col.s12
        .row
          .input-field.col.s6
            i.prefix.material-icons account_circle
            input#login.validate(type="text")
            label(for="login") Login or E-mail
          .input-field.col.s6
            i.prefix.material-icons fingerprint
            input#password.validate(type="password")
            label(for="password") Password

        button.right.btn.waves-effect.waves-light(type="submit" name="send")
          | Login
          i.material-icons.right send
</template>

<script>
export default {

}
</script>

<style>

</style>>
