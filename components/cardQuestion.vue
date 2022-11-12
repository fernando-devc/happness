<template>
	<div class="h-64 lg:w-72 flex flex-col max-w-md gap-2 p-6 rounded-md shadow-md bg-gray-900 text-gray-100">
		<h2 class="flex items-center gap-2 text-xl font-semibold leading-tight tracking-wide">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="w-6 h-6 fill-current shrink-0 text-violet-400">
				<path d="M451.671,348.569,408,267.945V184c0-83.813-68.187-152-152-152S104,100.187,104,184v83.945L60.329,348.568A24,24,0,0,0,81.432,384h86.944c-.241,2.636-.376,5.3-.376,8a88,88,0,0,0,176,0c0-2.7-.135-5.364-.376-8h86.944a24,24,0,0,0,21.1-35.431ZM312,392a56,56,0,1,1-111.418-8H311.418A55.85,55.85,0,0,1,312,392ZM94.863,352,136,276.055V184a120,120,0,0,1,240,0v92.055L417.137,352Z"></path>
				<rect width="32" height="136" x="240" y="112"></rect>
				<rect width="32" height="32" x="240" y="280"></rect>
			</svg>Perguntas Feitas
		</h2>
		<p class="flex-1 text-gray-400">{{question.question}}</p>
		<div class="flex flex-col justify-end gap-3 mt-6 sm:flex-row">
			<button class="px-6 py-2 rounded-sm text-orange-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
        </svg>
      </button>
			<button class="px-6 py-2 rounded-sm shadow-sm bg-violet-400 text-gray-900" @click.stop="selectQuestion(question.id)" >Selecionar</button>
		</div>
	</div>
</template>

<script>
  export default {
    props: {
      question:{
        question:''
      }
    },
    methods: {
      async selectQuestion (id){
      await this.$axios.get("/question/"+id,{params:{
        id:id
      }}).then((res)=>{
        console.log(res.data)
      })
    }
    },
  }
</script>

<style scoped>

</style>
