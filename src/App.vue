<template>
  <Header :c-counter="collection.length" :w-counter="wantlist.length" />
  <div class="container">
    <Homepage :collection="collection" v-bind:wantlist="wantlist" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Homepage from "./features/Homepage.vue";

export default {
  name: "App",
  components: {
    Header,
    Homepage
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
