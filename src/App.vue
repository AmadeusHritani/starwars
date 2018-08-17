<template>
  <div id="ellos-app">
    <div id="nav">
      <router-link to="/">Products List</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="stylus">

	#ellos-app
		-webkit-font-smoothing antialiased
		-moz-osx-font-smoothing grayscale
		height 100vh
		font-family -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"

	#nav
		text-align center
		padding 10px
		a
			font-weight bold
			color #2c3e50
			text-decoration none
			&.router-link-exact-active
				color #2ea3f2
	body
		margin 0
		font-size 0.8em
		color #555555

</style>
