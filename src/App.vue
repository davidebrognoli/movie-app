<template>
  <Header
    :c-counter="state.collection.length"
    :w-counter="state.wantlist.length"
  />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import { useState } from "./store";

export default {
  name: "App",
  components: {
    Header
  },
  setup() {
    const { state } = useState();
    return { state };
  }
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
