<template>
  <div id="app">
    <h1>THE ULTIMATE NO-EFFORT CHARACTER SHEET IN CHECKLIST FORM FOR YOUR CONVENIENCE</h1>
    <CharacterAspects/>
    <hr>
    <h2>
      Credit goes to <a href="http://justsomecynic.tumblr.com/">SOME CYNIC</a> for creating the original <a href="http://justsomecynic.tumblr.com/post/126139023289/im-a-very-lazy-person-i-know-my-characters-well">Ultimate no-effort character sheet for writers</a> PDF.
    </h2>
  </div>

</template>

<script>
import CharacterAspects from './components/CharacterAspects'

export default {
  name: 'App',
  components: {
    CharacterAspects
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
