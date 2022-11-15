<template>
  <div class="h-full w-full bg-happness relative  backdrop-blur-lg flex  flex-col justify-center gap-10 " >
    <div class="lg:flex-1 flex justify-center items-center lg:h-full">
      <form class="flex-1 flex gap-5 justify-center items-center flex-col">
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
    <div class="lg:flex-1 flex justify-center items-center lg:h-full">

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
      selected:{}
    }
  },
  methods: {
     async load (){
      const res = await this.$store.dispatch('votacao/getchar')
      this.chars = res.data
    },


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
