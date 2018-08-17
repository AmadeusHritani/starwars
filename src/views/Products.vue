<template>
  <div class="products-list">

	<tools v-on:sortProducts="sortProducts($event)"
		   v-on:searchQuery="searchQuery($event)"
		   :products="filteredProducts"/>

	<div class="container">
	  <div class="row">
		<div class="col-md-6">
		  <div class="left-pan mh-100">
			<products-list :products="filteredProducts"
				v-on:productDetails="showProductDetails($event)"/>
		  </div>
		</div>

		<div class="col-md-6">
		  <div class="right-pan h-100">
			  <div class="no-selection">
				  No product is selected
			  </div>
			  <product-details :productDetails="productDetails"/>
		  </div>
		</div>
	  </div>
	</div>
  </div>
</template>

<script>
// @ => /src
import _ from "lodash";
import ProductsList from "@/components/ProductsList.vue";
import Tools from "@/components/Tools.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import axios from "axios";
const PLPUrl =
  "https://sp1004e473.search.ellosgroup.com/?i=1&page=2&q1=Dam%3Adam%3Afalse&q2=Mode%3Adam~2Fmode%3Atrue&rank=LadiesDefault&x1=category1&x2=category2";

export default {
  name: "Products",
  data() {
    return {
      products: [],
      productDetails: {
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
    filteredProducts: {
      get() {
        return this.products.filter(product => {
          return product.fields.title.toLowerCase().includes(this.query);
        });
      },
      set() {
        return this.products.filter(product => {
          return product.fields.title.toLowerCase().includes(this.query);
        });
      }
    }
  },
  methods: {
    sortProducts: function(sortedProducts) {
      this.products = sortedProducts;
    },
    searchQuery: function(query) {
      this.query = query;
    },
    showProductDetails: function(productId) {
      // console.log(productId);
      this.productDetails = _.filter(this.products, {
        id: productId
      })[0].fields;
    }
  },
  created: function() {
    axios.get(apiUrl).then(response => (this.products = response.data));
  },
  components: {
    "products-list": ProductsList,
    tools: Tools,
    "product-details": ProductDetails
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
