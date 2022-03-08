<template>
  <div class="home">
  	<div class="grid grid-cols-4 gap-10 p-20">
		<div v-for="film in films" class="col-span-2 bg-white p-10 rounded-lg cursor-pointer">
	    	<router-link :to="`/film/${getId(film.url)}`">
		    	<h2 class="text-xl text-gray-600 mb-5">
		    		{{ film.title }}
		    	</h2>
		    	<p class="text-gray-400 mb-5">{{ film.opening_crawl }}</p>
		    	<p class="text-gray-600 text-lg mb-5">
		    		Realase date:{{ film.release_date }}
		    	</p>
	    	</router-link>
		</div>
  	</div>
  </div>
</template>

<script>
	export default {
		data(){
			return {
				films: []
			}
		},
		mounted(){
			this.axios.get('https://swapi.dev/api/films')
				.then(res => {
					this.films = res.data.results
					this.$store.dispatch('setError', null)
				}).catch((error) => {
					this.$store.dispatch('setError', 'Something went wrong!')
				})
		},
		methods: {
			getId(url){
				return url.substr(url.length -2)
			}
		}
	}
</script>

<style>
	body {
		background-color: #e2e8f0; 
	}
</style>
