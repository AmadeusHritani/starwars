<template>
	<ul class="movies-list">
		<movies-list-item v-for="(item, i) in movies" :movie="item" :key="i"
			v-on:movieId="emitMovieId($event)"/>
	</ul>
</template>

<script>
import MoviesListItem from "@/components/MoviesListItem.vue";

export default {
  name: "MoviesList",
  props: ["movies"],
  components: {
    "movies-list-item": MoviesListItem
  },
  methods: {
    emitMovieId: function(movieId) {
      this.$emit("movieDetails", movieId);
    }
  }
};
</script>

<style lang="stylus">
	ul.movies-list
		display block
		margin 0
		padding 0
</style>
