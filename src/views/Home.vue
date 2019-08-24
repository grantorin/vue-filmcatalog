<template lang="pug">
  .container
    .row
      .col.s12.m6.xl4(v-for="film in films" :key="film.id")
        .card
          .card-image
            img(:src="`${film.poster}`")
          .card-content
            span.card-title {{film.title}}
            p {{film.description | filterDescription}}
          .card-action
            a(:href="`/post/${film.id}`") more
            span.new.badge.blue(data-badge-caption="") {{film.type}}
</template>

<script>
export default {
  computed: {
    films() {
      return this.$store.getters.films
    }
  },

  filters: {
    filterDescription(string) {
      return string.length > 150 ? string.slice(0, 150) + ' ...' : string;
    }
  }
}
</script>

<style lang="sass">
</style>
