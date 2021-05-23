<template>
  <div id="app">
    <nav-bar />
    <search-header />
    <my-map />
    <my-footer class="my-footer" />
  </div>
</template>

<script>
import NavBar from "./components/NavigationBar.vue";
import SearchHeader from "./components/Header.vue";
import MyMap from "./components/Map.vue";
import MyFooter from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SearchHeader,
    MyMap,
    MyFooter
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
