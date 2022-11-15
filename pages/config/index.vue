<template>
  <div class="h-full w-full bg-happness relative  backdrop-blur-lg flex  flex-col justify-center gap-10 " >
    <div class="lg:flex-1 flex justify-center items-center lg:h-full">
      <form v-on:submit="handlesumit" class="flex-1 flex gap-5 justify-center items-center flex-col">
        <div class="flex gap-5">
          <div class="flex gap-2 flex-col ">
            <label class="text-white">Selecione o primeiro personagem</label>
            <select name="character_1">
              <option>Selecione um personagem</option>
              <option  v-for="char in chars" :value="char.id" v-bind:key="char.id">{{char.name}}</option>
            </select>
          </div>
          <div class="flex gap-2 flex-col ">
            <label class="text-white">Selecione o Segundo personagem</label>
            <select  name="character_2">
              <option>Selecione um personagem</option>
              <option  v-for="char in chars" :value="char.id" v-bind:key="char.id">{{char.name}}</option>
            </select>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <button type="submit" class="w-96 py-5 font-semibold lg:text-xl md:text-xl text-lg  bg-card-btn  rounded"> Criar votacao</button>
        </div>
      </form>
    </div>
    <div class="lg:flex-1 flex-col flex justify-center items-center lg:h-full">
      <div class="w-96 py-5 flex gap-2 bg-orange-500 rounded justify-between px-5 items-center" v-for="votacao in votacoes" v-bind:key="votacao.id">
        <span class="">
          {{votacao.character_1.name}} X {{votacao.character_2.name}}
        </span>
        <button class="p-3 bg-green-500 rounded" v-if="!votacao.open">Ativar</button>
        <button class="p-3 bg-red-500 rounded" @click="paraVotacao(votacao.id)" v-else>Desativar</button>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  components: { },
  name: 'IndexPage',
  data() {
    return {
      chars: [],
      selected:{},
      votacoes:[]
    }
  },
  methods: {
     async load (){
      const res = await this.$store.dispatch('votacao/getchar')
      this.chars = res.data
      await this.$axios.get("/votacao").then((res)=>{
        console.log(res.data)
        this.votacoes = res.data
      });

    },

    async paraVotacao (id){
      await this.$axios.delete("/votacao/"+id,{open:false},{params:{id:id}}).then((res)=>{
        this.load()
      })
    },

    async handlesumit (event) {
      event.preventDefault();
        const form = new FormData(event.target)
        const context={
          character_1:form.get('character_1'),
          character_2:form.get('character_2'),
          open:true,
        }
        await this.$axios.post("/votacao",context).then((res)=>{
        })
        this.load()
    }


  },
  mounted(){
    this.load()
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

.bg-card-btn{
    background:#ff9510 ;
    background-size: cover;
  }
</style>
