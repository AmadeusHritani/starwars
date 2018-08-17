<template>
	<ul class="products-list">
		<products-list-item v-for="(item, i) in movies" :movie="item" :key="i"
			v-on:movieId="emitMovieId($event)"/>
	</ul>
</template>

<script>
import MoviesListItem from "@/components/MoviesListItem.vue";

export default {
  name: "ProductsList",
  props: ["movies"],
  components: {
    "products-list-item": MoviesListItem
  },
  methods: {
    emitMovieId: function(movieId) {
      this.$emit("movieDetails", movieId);
    }
  }
};
</script>

<style lang="stylus">
	ul.products-list
		display block
		margin 0
		padding 0
</style>
