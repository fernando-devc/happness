<template>
	<div class="relative flex lg:flex-col items-center lg:max-w-lg   lg:gap-4 lg:p-6 rounded-md shadow-md  bg-gray-900 text-gray-100">
		<img src='../static/Astronaut-cuate.svg' class="flex-1 lg:w-auto w-32"/>
    <div class="flex-col flex gap-4 items-center flex-wrap px-10">
      <h2 class="text-2xl font-semibold leading-tight tracking-wide">Pergunta que está sendo exibida!.</h2>

      <p class="flex-1 text-center text-gray-400 " v-if="selected">{{selected.question}}</p>
      <p class="flex-1 text-center text-gray-400 " v-else>Nenhuma pergunta foi selecionada</p>
      <button type="button" class="px-8 py-3 font-semibold rounded-full bg-violet-400 text-gray-900">Selecionada</button>
    </div>
	</div>
</template>

<script>
  export default {
    props:{
      selected:{}
    }
  }
</script>

<style scoped>

</style>
