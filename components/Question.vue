<template>
	<div class="p-5 pt-0 max-w-screen-xl mx-auto sm:p-10 md:p-16  text-gray-100">
		<div class=" rounded">
			<img src="../static/logoajustada.png" alt="" class=" w-full z-10 ">
      <div class="w-full lg:-mt-44 md:-mt-32 -mt-24 ">
        <div class=" rounded-md bg-card  w-full max-w-4xl mx-auto h-64  px-5 flex items-center">
          <div class="space-y-2 w-full">
            <p class=" text-center w-full font-semibold lg:text-4xl md:text-3xl text-lg" v-if="question">{{question.question}}</p>
            <p class=" text-center w-full font-semibold lg:text-4xl md:text-3xl text-lg" v-else>Faça um pergunta!</p>
          </div>
        </div>
      </div>
		</div>
	</div>
</template>
 <script>
  export default {
    data() {
    return {
      question: {}
    }
  },
  methods: {
   async load() {
      await this.$axios.get('/question').then((res)=>{
        this.question = res.data.find((o)=>o.selected===true);
      })
    },
  },
  mounted ( ) {
    this.load()
    setInterval(()=>{
      this.load()
    },[5000])
  }
  }
</script>
<style scoped>
  .bg-card{
    background-image:linear-gradient(to bottom, #91530c8c, #00000048),  url('static/bg.jpg') ;
    background-size: cover;
  }
</style>
