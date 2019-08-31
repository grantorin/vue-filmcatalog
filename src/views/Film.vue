<template lang="pug">
  .container
    .row(v-if="film && !editing")
      .col.s12.m4.l3
        img.poster(:src="film.poster")
      .col.s12.m8.l9
        h3 {{ film.title }}
        p {{ film.description }}
        span.new.badge.blue(data-badge-caption="") {{ film.type }}

    form.col.s12(@submit.prevent="updateFilm" v-else-if="film && editing")
      .row
        .col.s12.m4.l3
          .poster-box
            img.poster-img(:src="posterSrc")
            .btn-floating.waves-effect.waves-light.red.poster-clear(@click="removePoster" v-if="film.poster")
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
            .file-field.input-field.col.s12(v-else)
              .btn
                span Poster
                input(type="file" accept="image/*" @change="onFileChange")
              .file-path-wrapper
                input.file-path.validate(type="text" v-model="posterName")

          .row
            .col.s12
              button.right.btn.waves-effect.waves-light.waves-effect(type="submit" :disabled="processUpload" name="send")
                | update
                i.material-icons.right send
    .row
      .col.s12
        button.waves-effect.waves-light.btn(@click="toggleEdit" v-if="isUserOwner")
          i.material-icons.left {{ labelButton }}
          | {{ labelButton }}
</template>

<script>
export default {
  name: 'Film',
  data () {
    return {
      id: this.$route.params['id'],
      editing: false,
      name: '',
      description: '',
      posterName: '',
      posterSrc: '',
      type: '',
      typeSrc: false,
      posterImg: null,
      processUpload: false
    }
  },

  computed: {
    film () {
      return this.$store.getters.film(this.id)
    },
    isUserOwner () {
      return this.$store.getters.film(this.id)
        ? this.$store.getters.isUserOwner(this.id, this.$store.getters.user)
        : false
    },
    labelButton () {
      return this.editing ? 'cancel' : 'edit'
    }
  },

  methods: {
    toggleEdit () {
      this.editing = !this.editing
      if (this.editing && this.film) {
        this.name = this.film.title
        this.description = this.film.description
        this.posterSrc = this.film.poster
        this.type = this.film.type
      }
    },
    onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files

      if (!files.length) return

      this.createImage(files[0])
    },
    createImage (file) {
      let reader = new FileReader()
      let $this = this

      reader.onload = (e) => {
        $this.posterSrc = e.target.result
        $this.posterName = file.name
      }
      reader.readAsDataURL(file)
      this.posterImg = file
    },
    removePoster: function (e) {
      this.posterSrc = ''
      this.posterName = ''
    },

    clearData () {
      this.name = ''
      this.description = ''
      this.posterName = ''
      this.posterSrc = ''
      this.type = ''
      this.typeSrc = false
      this.posterImg = null
    },

    updateFilm () {
      this.processUpload = true
      const updateFilm = {
        title: this.name,
        description: this.description,
        poster: this.posterName || this.posterSrc,
        type: this.type,
        id: this.id
      }

      for (let key in updateFilm) {
        if (!updateFilm[key]) {
          // eslint-disable-next-line no-undef
          Materialize.toast('All fields is required!', 3000)
          return
        }
      }

      if (this.posterImg) updateFilm.posterImg = this.posterImg

      this.$store.dispatch('updateFilm', updateFilm)
        .then(() => {
          // eslint-disable-next-line no-undef
          Materialize.toast('success', 3000)
          this.processUpload = false
          this.editing = false
          this.clearData()
        })
        .catch(err => {
          console.error(err)
          this.processUpload = false
        })
    }
  }
}
</script>

<style lang="sass">
.poster
  max-width: 100%
  height: auto
</style>
