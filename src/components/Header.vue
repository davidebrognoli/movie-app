<template>
  <header class="header">
    <h1 class="title"><router-link to="/">My Movies App</router-link></h1>
    <div class="actions">
      <button alt="wantlist" class="button">
        <span>{{ wCounter }}</span>
        <svg class="icon icon-star">
          <use xlink:href="symbol-defs.svg#icon-star"></use>
        </svg>
      </button>
      <button alt="collection" class="button">
        <span>{{ cCounter }}</span>
        <svg class="icon icon-eye">
          <use xlink:href="symbol-defs.svg#icon-eye"></use>
        </svg>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  props: ["wCounter", "cCounter"],
  name: "Header"
};
</script>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1;
  height: 80px;
  background-color: #fff;
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr) 200px;
  grid-template-areas: "left title right";
  align-items: center;
  gap: 20px;
  text-transform: uppercase;
}

.title {
  grid-area: title;
  text-align: center;
}

.title a {
  color: #000;
  text-decoration: none;
}

.actions {
  grid-area: right;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: auto;
}

.button {
  margin-left: 20px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 75px;
  padding: 5px 10px;
  border: 1px solid #000;
  border-radius: 10px;
}

.button:focus {
  outline: none;
}

.button span {
  font-size: 16px;
}

.button svg {
  width: 25px;
  height: 25px;
}
</style>
