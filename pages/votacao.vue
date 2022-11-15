<template>
  <div class="h-full w-full bg-happness relative  backdrop-blur-lg flex lg:flex-row flex-col justify-center gap-10 " >
    <div class="lg:flex-1 flex justify-center items-center lg:h-full">
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
      questions: [],
      selected:{}
    }
  },
  methods: {
     async load (){
      const res = await this.$store.dispatch('votacao/getchar')
      this.questions = res.data
    },


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
