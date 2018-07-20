<template>
	<li @click="showMovieDetails()" class="movie" v-bind:id="'movie_'+movie.id">
		<div class="row">
			<div class="col-9">
				<div class="ep">
					<span class="ep-num">{{episode}}</span>
					<span class="ep-title">{{movie.fields.title}}</span>
				</div>
			</div>
			<div class="col-3">
				<div class="ep">
					<div class="ep-date">{{movie.fields.release_date}}</div>
				</div>
			</div>
		</div>
	</li>
</template>

<script>
export default {
  name: "StarWarsMoviesItem",
  props: ["movie"],
  computed: {
    episode: function() {
      return "episode " + this.movie.fields.episode_id;
    }
  },
  methods: {
    showMovieDetails: function() {
      this.$emit("movieId", this.movie.id);
      let lis = document.querySelectorAll("li");
      for (let n = 0; n < lis.length; ++n) {
        if (lis[n] !== this) {
          lis[n].className = "movie";
        }
      }
      let movieItem = document.getElementById("movie_" + this.movie.id);
      movieItem.classList.add("selected");
      $(".no-selection").addClass("hidden");
      $(".movie-details").addClass("visible");
    }
  }
};
</script>

<style scoped lang="stylus">
	li.movie
		cursor pointer
		list-style none
		border-bottom thin solid #EEEEEE
		border-top thin solid transparent
		&:hover
			background-color #F9F9F9
		&.selected
			background-color #F1F1F1
			border-bottom thin solid #2ea3f2
			border-top thin solid #2ea3f2

		.ep
			padding 15px 5px
			.ep-num
			.ep-title
				display inline-block
			.ep-num
				margin-right 20px
				font-size .8em
				text-transform uppercase
				letter-spacing 1px
			.ep-title
				font-weight 500
			.ep-date
				display block
				text-align right
				padding-right 5px
</style>
