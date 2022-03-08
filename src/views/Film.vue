<template>
    <div class="m-20 bg-white p-10 rounded-lg text-left">
    	<h2 class="text-xl text-gray-600 mb-5">
    		{{ film.title }}
    	</h2>
    	<p class="text-gray-400 mb-5">{{ film.opening_crawl }}</p>
    	<p class="text-gray-600 text-lg mb-5">
    		Realase date:{{ film.release_date }}
    	</p>
    	<div class="pb-20">
    		<h3 class="text-xl text-gray-600 text-center my-10">
    			Characters:
    		</h3>
    		<div class="grid grid-cols-6 gap-6">
    			<div v-for="character in characters" class="col-span-2 mx-20">
    				<div class="text-xl text-gray-600 font-semibold mb-5">
    					{{ character.name }}
    				</div>
    				<div>
    					Birth year: <span class="text-gray-400">{{ character.birth_year }}</span>
    				</div>
    				<div>
    					Height: <span class="text-gray-400">{{ character.height }}</span>
    				</div>
    				<div>
    					Mass: <span class="text-gray-400">{{ character.mass }}</span>
    				</div>
    				<div>
    					Hair color: <span class="text-gray-400">{{ character.hair_color }}</span>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
</template>

<script>
	export default {
		data(){
			return {
				film: {},
				characters: [],
			}
		},
		mounted(){
			this.axios.get(`https://swapi.dev/api/films/${this.$route.params.id}`)
				.then(res => {
					this.film = res.data
					this.getCharacters()
				})
		},
		methods: {
			getCharacters(){
				this.film.characters.forEach(character => {
					this.axios.get(character)
						.then(res => {
							this.characters.push(res.data)
							console.log(this.characters)
						})
				})
			}
		}
	}
</script>
