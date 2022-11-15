<template>
	<div class="p-5 max-w-screen-xl mx-auto sm:p-10 md:p-16  text-gray-100">
		<form class=" rounded " v-on:submit="handleSubmit">
			<img src="../static/logoajustada.png" alt="" class=" w-full z-10 ">
      <div class="w-full lg:-mt-44 md:-mt-32 mt-0 " @click="inputfocus">
        <div class=" rounded-md bg-card  w-full max-w-4xl mx-auto h-64  px-5 flex items-center">
          <div class="space-y-2 h-full w-full flex items-center" for="input_question" >
            <textarea id="input_question" name="question" placeholder="Digite sua pergunta" class=" lg:h-auto h-full  p-0 cursor-text font-semibold lg:text-4xl md:text-3xl text-lg w-full bg-transparent text-center">

            </textarea>
          </div>
        </div>
      </div>
      <div class="w-full mt-10 max-w-4xl mx-auto">
        <button v-if="!enviada" type="submit" class="w-full py-5 font-semibold lg:text-xl md:text-xl text-lg  bg-card-btn  rounded"> Enviar pergunta</button>
        <button v-else type="button" class="w-full py-5 font-semibold lg:text-xl md:text-xl text-lg  bg-green-500  rounded"> pergunta Enviada</button>
      </div>
		</form>
	</div>
</template>
 <script>
   export default {
    data() {
      return {
        enviada: false
      }
    },
    methods: {
      inputfocus() {
        document.getElementById('input_question').focus()
      },
      async handleSubmit  (event){
        event.preventDefault();
        const form = new FormData(event.target)
        const context={
          question:form.get('question')
        }
        await this.$axios.post("/question",context).then((res)=>{
          this.enviada = true
        })
      }
    },
  }
</script>
<style scoped>
  .bg-card{
    background-image:linear-gradient(to bottom, #91530c8c, #00000048),  url('static/bg.jpg') ;
    background-size: cover;
  }
  .bg-card-btn{
    background:#ff9510 ;
    background-size: cover;
  }
</style>

