<template>
	<div class="tools">
		<div class="container">
			<div class="row">
				<div class="col-lg-2">
					<button @click="toggleSortOptions()" class="sort">Sort by...</button>
					<div class="sort-options">
						<section class="options-header">Sort by <span @click="toggleSortOptions" class="fa fa-times"></span></section>
						<section class="options-list">
							<ul>
								<li class="sort-id">
									<button @click="sortMovies(movies, 'fields.episode_id')">Episode</button>
								</li>
								<li class="sort-year">
									<button @click="sortMovies(movies, 'fields.release_date')">Year</button>
								</li>
							</ul>
						</section>
					</div>
				</div>
				<div class="col-lg-10">
					<span class="fa fa-search"></span>
					<input v-model="query" @input="searchQuery()" name="search" id="search" class="search" placeholder="Type to search..." type="text">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "Tools",
  props: ["movies"],
  data() {
    return {
      query: ""
    };
  },
  methods: {
    toggleSortOptions: function() {
      $(".sort-options").toggleClass("visible");
    },

    searchQuery: function() {
      // console.log(this.query);
      this.$emit("searchQuery", this.query.toLowerCase());
    },

    sortMovies(movies, key) {
      let sortedMovies = _.orderBy(movies, key, "asc");
      console.log(sortedMovies);
      // Add active to target list item
      if (key === "fields.episode_id") {
        $(".sort-id").addClass("active");
        $(".sort-year").removeClass("active");
      } else if (key === "fields.release_date") {
        $(".sort-year").addClass("active");
        $(".sort-id").removeClass("active");
      }
      this.$emit("sortMovies", sortedMovies);
    }
  }
};
</script>

<style lang="stylus">
	.tools
		padding 10px 10px 5px 10px
		background-color #F2F2F2
		border-bottom solid thin #E5E5E5
		border-top solid thin #E5E5E5
		button.sort
			margin-right 10px
			color #555555
			font-weight 600
			cursor pointer
			background-color #FCFCFC
			-webkit-appearance none
			-moz-appearance none
			border solid thin #E1E1E1
			&:hover, &:active
				background-color #FFFFFF
			&:focus
				outline 0
				background-color #E7EDF7
				border-color #CCCCCC
				color #044391
		.sort-options
			transition all .3s ease-in-out
			position absolute
			background-color white
			box-shadow 0 3px 6px rgba(#000000, .2)
			z-index 3
			border-radius 4px
			width 100%
			display none
			opacity 0
			height 0
			&.visible
				display block
				opacity 1
				height auto
			.options-header
				padding 8px 10px
				border-bottom solid thin #E1E1E1
				font-weight 600
				position relative
				.fa.fa-times
					padding 5px
					font-weight 100
					cursor pointer
					position absolute
					right 10px
					top 50%
					transform translateY(-50%)
			.options-list
				padding 0
				ul
					margin 0
					padding 0
					li
						margin 0
						display block
						list-style none
						border-bottom thin solid #E5E5E5
						&:last-of-type
							border none
						&.active
							background-color #EEEEEE
						button
							padding 5px 15px
							background-color transparent
							border none
							cursor pointer
							display block
							width 100%
							text-align left
							&:focus
								outline 0
		#search, .sort
			padding 10px 15px
			border-radius 4px
			display block
			width 100%
			margin-bottom 5px
			outline 0
			border-style solid
		#search
			padding-left 35px
			background-color #FFFFFF
			border solid thin #CCCCCC
			&::placeholder
				color #CCCCCC
		.fa.fa-search
			font-size 1.3em
			color #999999
			position absolute
			z-index 2
			left 26px
			top 46%
			transform translateY(-50%)

</style>
