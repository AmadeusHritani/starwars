<template>
	<div class="movie-details">
		<h3>{{movieDetails.title}}</h3>
		<section class="crowler">
			{{movieDetails.opening_crawl}}
		</section>
		<footer>Directed by: <b>{{movieDetails.director}}</b></footer>
	</div>
</template>

<script>
export default {
  name: "MovieDetails",
  props: ["movieDetails"]
};
</script>

<style lang="stylus">
	.movie-details
		display none
		padding-top 20px
		&.visible
			display block
		h3
			margin-bottom 20px
		footer
			margin-top 20px
</style>
