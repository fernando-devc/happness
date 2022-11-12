<template>
  <div class="h-full w-full bg-happness relative  backdrop-blur-lg flex lg:flex-row flex-col justify-center gap-10 " >
    <div class="lg:flex-1 flex justify-center items-center lg:h-full">
      <card-question-selected :selected='selected'/>
    </div>
    <section class=" flex-1   max-w-full lg:py-20 flex lg:flex-wrap gap-4 justify-start lg:overflow-y-auto overflow-x-auto lg:overflow-x-hidden">
      <card-question v-for="question in questions" v-bind:key="question.id" :question="question"/>
    </section>
  </div>
</template>

<script>
import CardQuestion from '../components/cardQuestion.vue'
import CardQuestionSelected from '../components/CardQuestionSelected.vue'

export default {
  components: {CardQuestion, CardQuestionSelected  },
  name: 'IndexPage',
  data() {
    return {
      questions: [],
      selected:{}
    }
  },
  methods: {
     async load (){
      const res = await this.$store.dispatch('question/getQuestion')
      this.selected = res.data.find((o)=>o.selected === true)
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
