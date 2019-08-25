<template lang="pug">
  .container
    .progress(v-if="preload")
      .indeterminate
    .row(v-show="!preload")
      .col.s12.m6.xl4(v-for="film in films" :key="film.id")
        .card
          .card-image
            img(:src="`${film.poster}`")
          .card-content
            span.card-title {{film.title}}
            p {{film.description | filterDescription}}
          .card-action
            router-link(:to="`/post/${film.id}`") more
            span.new.badge.blue(data-badge-caption="") {{film.type}}
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      preload: true
    }
  },

  computed: {
    films() {
      setTimeout(() => {
        this.preload = false
      }, 1000)
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
