<template>
  <p v-if="loading">Loading...</p>
  <p v-if="error">{{ error }}</p>
  <div v-if="!loading && !error" class="detail">
    <img :src="movie.Poster" :alt="movie.Title" class="image" />
    <div class="content">
      <h1 class="title">{{ movie.Title }}</h1>
      <ul>
        <li><b>Released</b> {{ movie.Released }}</li>
        <li><b>Runtime</b> {{ movie.Runtime }}</li>
        <li><b>Director</b> {{ movie.Director }}</li>
        <li><b>Production</b> {{ movie.Production }}</li>
        <li><b>Genre</b> {{ movie.Genre }}</li>
        <li><b>Actors</b> {{ movie.Actors }}</li>
        <li><b>Awards</b> {{ movie.Awards }}</li>
        <li><b>Rating</b> {{ movie.imdbRating }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  data() {
    return {
      loading: true,
      error: null,
      movie: null
    };
  },
  methods: {
    fetchData() {
      fetch(
        `http://www.omdbapi.com/?apikey=cf5186d5&i=${this.$route.params.id}`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("API Error");
          }
        })
        .then(data => {
          console.log(data);
          this.movie = data;
          this.loading = false;
        })
        .catch(err => {
          this.error = err;
          this.loading = false;
        });
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style scoped></style>
