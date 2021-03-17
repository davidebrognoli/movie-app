<template>
  <div class="movie">
    <img
      v-if="movie.Poster && movie.Poster !== 'N/A'"
      :src="movie.Poster"
      :alt="movie.Title"
      class="movie-img"
    />
    <div
      class="movie-missing-img"
      v-if="!movie.Poster || movie.Poster === 'N/A'"
    >
      N/A
    </div>
    <div class="content">
      <h2 class="title">
        <router-link :to="`/movie/${movie.imdbID}`">
          {{ movie.Title }} <span class="year">({{ movie.Year }})</span>
        </router-link>
      </h2>
      <div class="actions">
        <button alt="wantlist" class="button">
          <svg class="icon icon-star">
            <use xlink:href="symbol-defs.svg#icon-star"></use>
          </svg>
        </button>
        <button alt="collection" class="button">
          <svg class="icon icon-eye">
            <use xlink:href="symbol-defs.svg#icon-eye"></use>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["movie"],
  name: "Movie"
};
</script>

<style scoped>
.movie {
  max-width: 300px;
  width: 100%;
  margin-bottom: 30px;
}

.movie-img {
  width: 100%;
  height: auto;
  display: block;
}

.movie-missing-img {
  display: flex;
  height: 300px;
  background-color: #ccc;
  align-items: center;
  justify-content: center;
}

.actions {
  margin-left: auto;
}

.title span {
  font-weight: normal;
  font-size: 16px;
}

.title a {
  color: #000;
  text-decoration: none;
}

.button {
  background-color: transparent;
  border: none;
}

button svg {
  width: 30px;
  height: 30px;
}
</style>
