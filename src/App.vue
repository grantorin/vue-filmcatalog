<template lang="pug">
  #app
    header.header
      nav
        .nav-wrapper
          router-link.brand-logo(to='/')
            img(alt="Vue logo" src="./assets/logo.png")

          a.right.sidenav-trigger.hide-on-large-only(href="#" data-target="mobile-menu" data-activates="mobile-menu")
            i.material-icons menu

          ul.nav-list.right.hide-on-med-and-down
            li.nav-list__item(v-for="link in linkMenu" :key="link.title")
              router-link.nav-list__link(:to="`${link.url}`")
                i.material-icons {{ link.icon }}
                | {{ link.title }}

      ul#mobile-menu.side-nav
        li(v-for="link in linkMenu" :key="link.title")
          router-link.nav-list__link(:to="`${link.url}`") {{ link.title }}

    router-view
</template>

<script>
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      linkMenu: [
        {title: 'Home', url: '/', icon: 'account_balance'},
        {title: 'About', url: '/about', icon: 'art_track'},
        {title: 'New Film', url: '/new', icon: 'add_box'},
        {title: 'Registration', url: '/reg', icon: 'assignment_ind'},
        {title: 'Authorization', url: '/auth', icon: 'account_circle'}
      ]
    }
  },

  mounted() {
    $(".sidenav-trigger").sideNav();
  }
}
</script>>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  color: #2c3e50

a
  display: inline-block

.row
  display: flex
  flex-wrap: wrap

.card
  // height: 100%

.header
  margin-bottom: 30px

.nav
  &.router-link-exact-active
    color: #42b983
  &-list
    &__link
      display: flex
      align-items: center
      .material-icons
        display: inline-block
        margin-right: 10px

nav
  .brand-logo
    padding-left: 15px
    padding-right: 15px
    height: 100%
    display: flex
    align-items: center
    &>img
      max-width: 50px
      height: auto
</style>
