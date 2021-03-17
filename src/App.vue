<template>
  <Header :c-counter="collection.length" :w-counter="wantlist.length" />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      collection: [],
      wantlist: []
    };
  },
  methods: {}
};
</script>

<style>
body {
  font-family: "Lato", sans-serif;
}

.container {
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
}
</style>
