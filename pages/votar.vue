<template>
  <div class="h-full w-full bg-happness relative  backdrop-blur-lg flex lg:flex-row flex-col justify-center gap-10 " >
    <div class="lg:flex-1 flex justify-center items-center flex-1 gap-5 lg:h-full">
      <button class="flex-1 bg-blue-500 flex flex-col text-white h-full">
        <span>{{votacao.character_1.name ||``}}</span>
        <span>{{votacao.character_1.character ||``}}</span>
      </button>
      <button class="flex-1 bg-green-500 flex-col text-white h-full">
        <span>{{votacao.character_2.name ||``}}</span>
        <span>{{votacao.character_2.character ||``}}</span>
      </button>
    </div>
  </div>
</template>

<script>


export default {
  components: { },
  name: 'IndexPage',
  data() {
    return {
      questions: [],
      selected:{},
      votacao:{
        character_1:{
          name:''
        },
        character_2:{
          name:''
        }
      },
    }
  },
  methods: {
     async load (){
      const res = await this.$store.dispatch('votacao/getchar')
      this.questions = res.data
      await this.$axios.get('/votacao').then((res)=>{
        this.votacao = res.data[0]
      })
    },

    async votar (character,votacao){
      await this.$axios.post('/votar',{character:character,votacao:votacao})
    }

  },
  mounted(){
    this.load()
    setInterval(() => {
      this.load()
    }, 10000);
  }
}
</script>

<style scoped>
.bg-happness{
  background-image:linear-gradient(to bottom, #0000004f, #0000007e),  url('static/bg.jpg') ;
  background-repeat:no-repeat ;
  background-size:cover ;
}
.content-container{
  max-width: 1800px;
  margin:0 auto;
}
</style>
