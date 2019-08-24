<template lang="pug">
  .container
    .row
      .col.s12.m4.l3
        img.poster(:src="film.poster")
      .col.s12.m8.l9
        h3 {{ film.title }}
        p {{ film.description }}
        span.new.badge.blue(data-badge-caption="") {{ film.type }}
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params['id']
    }
  },
  computed: {
    film() {
      return this.$store.getters.film(this.id)
    }
  },
  mounted() {
    console.log(this.$store.getters.film(this.id));
  }
}
</script>

<style lang="sass">
.poster
  max-width: 100%
  height: auto
</style>
