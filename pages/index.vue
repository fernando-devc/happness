<template>
  <div class="h-full w-full bg-happness relative  backdrop-blur-lg flex justify-center " >
    <section class="z-10">
      <QuestionForm/>
    </section>
    <!-- <div class=" h-full w-full bg-black/50 backdrop-blur-lg "></div> -->
  </div>
</template>

<script>

export default {
  components: {  },
  name: 'IndexPage'
}
</script>

<style scoped>
.bg-happness{
  background-image:linear-gradient(to bottom, #0000004f, #0000007e),  url('static/bg.jpg') ;
  background-repeat:no-repeat ;
  background-size:cover ;
}
</style>
