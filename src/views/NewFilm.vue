<template lang="pug">
  .container
    .row

      h5 New Film

      form.col.s12(@submit.prevent="addFilm")
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
              .switch.col.s12
                label
                  | URL
                  input(type="checkbox" v-model="typeSrc")
                  span.lever
                  | Local file
              .input-field.col.s12(v-if="!typeSrc")
                input#url.materialize-textarea(type="url" v-model="posterSrc")
                label(for="url") Url
              .file-field.input-field.col.s12(v-if="typeSrc")
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
      typeSrc: false
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
    },

    addFilm() {
      const newFilm = {
        title: this.name,
        description: this.description,
        poster: this.posterName || this.posterSrc,
        type: this.type
      }
      this.$store.dispatch('createdFilm', newFilm)
        .then(() => {
          Materialize.toast('success', 3000)
        })
        .catch(err => {
          console.log(err);
        })
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
