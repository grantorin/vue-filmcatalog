<template lang="pug">
  .container
    .row

      h5 New Film

      form.col.s12(@submit.prevent="onSubmit")
        .row
          .col.s12.m4.l3
            .poster-box
              img.poster-img(:src="posterSrc")
              .btn-floating.waves-effect.waves-light.red.poster-clear(@click="removePoster" v-if="posterName")
                i.material-icons clear
          .col.s12.m8.l9
            .row
              .input-field.col.s12
                input#name.validate(type="text" v-model="name" required)
                label(for="name") Film Name
              .input-field.col.s12
                input#type.autocomplete.validate(type="text" v-model="type" required)
                label(for="type") Type
              .input-field.col.s12
                textarea#textarea1.materialize-textarea(v-model="description")
                label(for="textarea1") Description
              .file-field.input-field.col.s12
                .btn
                  span Poster
                  input(type="file" @change="onFileChange")
                .file-path-wrapper
                  input.file-path.validate(type="text" v-model="posterName")

        .row
          .col.s12
            button.right.btn.waves-effect.waves-light.waves-effect(type="submit" name="send")
              | Add
              i.material-icons.right send
</template>

<script>
export default {
  data() {
    return {
      name: '',
      description: '',
      posterName: '',
      posterSrc: '',
      type: '',
    }
  },

  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;

      if (!files.length) return;

      this.createImage(files[0]);
    },
    createImage(file) {
      let image = new Image();
      let reader = new FileReader();
      let $this = this;

      reader.onload = (e) => {
        $this.posterSrc = e.target.result;
        $this.posterName = file.name;
      };
      reader.readAsDataURL(file);
    },
    removePoster: function (e) {
      this.posterSrc = '';
      this.posterName = '';
    }
  }
}
</script>

<style lang="sass">
.poster
  &-box
    position: relative
    height: 100%
    background: #f0f0f0
    display: flex
    justify-content: center
    align-items: center
    &::before
      content: 'poster'
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      color: #aaa
      font-weight: 700
      font-size: 2rem
      z-index: 0
  &-img
    max-width: 100%
    height: auto
    position: relative
  &-clear
    position: absolute
    top: -20px
    right: -20px
</style>
