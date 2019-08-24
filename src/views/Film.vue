<template lang="pug">
  .container
    .row
      .col.s12.m4.l3
        img(:src="poster")
      .col.s12.m8.l9
        h1 {{ title }}
        span.new.badge.blue(data-badge-caption="") {{ type }}
        p {{ description }}
</template>

<script>
export default {
  data() {
    return {
      poster: '',
      title: '',
      type: '',
      description: ''
    }
  }
}
</script>

<style>

</style>
