<template>
    <h1 v-if="!pokemon">Espere por favor...</h1>
    <div v-else>
        <h1>¿Quién es este Pokemon?</h1>
        <PokemonPicture
          :pokemonId="pokemon.id"
          :showPokemon="showPokemon" />
        <PokemonOptions
          :pokemons="pokemonArr" 
          @selection="checkAnswer"/>
        <template v-if="showAnser">
            <h2 class="fade-in">{{ message }}</h2>
            <button @click="newGame">
                Nuevo Juego
            </button>
        </template>
          
    </div>
    
</template>
<script>
    import PokemonOptions from '@/components/PokemonOptions.vue';
    import PokemonPicture from '@/components/PokemonPicture';
    import getPokemonOptions from '@/helpers/getPokemonOptions';

    console.log(getPokemonOptions());
export default {
    name:"pokemonPages",
    components:{
        PokemonOptions,
        PokemonPicture
    },
    data() {
        return {
            pokemonArr: [],
            pokemon: null,
            showPokemon: false, 
            showAnser: false, 
            message:'',
        }
    },
    methods:{
        async mixPokemonsArray() {
            this.pokemonArr = await getPokemonOptions();


            const rndInt = Math.floor( Math.random() * 4 )
            this.pokemon = this.pokemonArr[rndInt]
        },

        checkAnswer( pokemonId ) {
            this.showPokemon = true
            this.showAnser = true;
            if( pokemonId === this.pokemon.id ){
                this.message = `Correcto, ${ this.pokemon.name}`
            } else{
                this.message = `Ooppss era , ${ this.pokemon.name}`
            }
        },
        newGame() {
            this.showPokemon = false 
            this.showAnser = false
            this.pokemon = null 
            this.pokemonArr = []
            this.mixPokemonsArray() 
        }
    },
    mounted() {
        this.mixPokemonsArray();
    },
    
}
</script>
<style>
    
</style>