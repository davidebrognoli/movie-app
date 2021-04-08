<template>
  <div class="search">
    <form class="search-form" v-on:submit="submit($event)">
      <input
        type="text"
        name="title"
        id="title"
        class="search-input"
        v-model="title"
      />
      <button type="submit" class="search-button">Search</button>
    </form>
  </div>
  <p v-if="loading">Loading...</p>
  <p v-if="error">{{ error }}</p>
  <div class="results" v-if="!loading && !error">
    <Movie :movie="movie" v-for="movie of movies" :key="movie.id" />
  </div>
</template>

<script>
import Movie from "../components/Movie.vue";

export default {
  data() {
    return {
      title: "",
      loading: false,
      movies: [],
      error: null
    };
  },
  name: "Homepage",
  components: {
    Movie
  },
  methods: {
    submit(evt) {
      this.loading = true;
      evt.preventDefault();
      evt.stopPropagation();
      fetch(`http://www.omdbapi.com/?apikey=cf5186d5&s=${this.title}`)
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("API Error");
          }
        })
        .then(data => {
          this.movies = data.Search;
          this.loading = false;
        })
        .catch(error => {
          this.error = error;
          this.loading = false;
        });
    }
  }
};
</script>

<style scoped>
.search {
  top: 80px;
  z-index: 1;
  padding: 10px 0;
  background-color: #fff;
  position: sticky;
}

.search-form {
  width: 800px;
  margin: 0 auto;
  display: flex;
}

.search-input {
  flex: 1;
  padding: 5px 10px;
}

.search-button {
  margin-left: 20px;
}

.results {
  padding: 30px 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
}
</style>
