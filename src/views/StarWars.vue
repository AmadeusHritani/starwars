<template>
  <div class="star-wars">

		<tools v-on:sortMovies="sortMovies($event)"
		       v-on:searchQuery="searchQuery($event)"
		       :movies="filteredMovies"/>

	  <div class="container">
		  <div class="row">
			  <div class="col-md-6">
				  <div class="left-pan mh-100">
					  <movies-list :movies="filteredMovies"
							v-on:movieDetails="showMovieDetails($event)"/>
				  </div>
			  </div>

			  <div class="col-md-6">
				  <div class="right-pan h-100">
					  <div class="no-selection">
						  No movie is selected
					  </div>
					  <movie-details :movieDetails="movieDetails"/>
				  </div>
			  </div>
		  </div>
	  </div>
  </div>
</template>

<script>
// @ => /src
import _ from "lodash";
import MoviesList from "@/components/MoviesList.vue";
import Tools from "@/components/Tools.vue";
import MovieDetails from "@/components/MovieDetails.vue";
import axios from "axios";
const apiUrl = "https://star-wars-api.herokuapp.com/films";

export default {
  name: "StarWars",
  data() {
    return {
      movies: [],
      movieDetails: {
        fields: {
          title: "Episode Title",
          opening_crawl: "Episode Crawl",
          director: "Director"
        }
      },
      query: ""
    };
  },
  computed: {
    filteredMovies: {
      get() {
        return this.movies.filter(movie => {
          return movie.fields.title.toLowerCase().includes(this.query);
        });
      },
      set() {
        return this.movies.filter(movie => {
          return movie.fields.title.toLowerCase().includes(this.query);
        });
      }
    }
  },
  methods: {
    sortMovies: function(sortedMovies) {
      this.movies = sortedMovies;
    },
    searchQuery: function(query) {
      this.query = query;
    },
    showMovieDetails: function(movieId) {
      // console.log(movieId);
      this.movieDetails = _.filter(this.movies, { id: movieId })[0].fields;
      // console.log(this.movieDetails);
      // console.log(_.filter(this.movies, { id: movieId })[0]);
    }
  },
  created: function() {
    axios.get(apiUrl).then(response => (this.movies = response.data));
    // $.getJSON(apiUrl).done(moviesData => { this.movies = moviesData; });
  },
  components: {
    "movies-list": MoviesList,
    tools: Tools,
    "movie-details": MovieDetails
  }
};
</script>

<style lang="stylus">
	/*@import url("//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css");*/

	.right-pan
		position relative
		.no-selection
			position absolute
			top 50%
			left 50%
			transform translate(-50%,-50%)
			font-size 1.3em
			font-weight 500
			&.hidden
				display none
	.left-pan
		border-right thin solid #CCCCCC
		position relative
		padding-bottom 30px
		min-height 250px

</style>
