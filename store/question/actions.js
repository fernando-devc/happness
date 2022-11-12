export default {
  getQuestion(context) {
    let token = window.localStorage.getItem("jwt-colabdev");
      return this.$axios.get("/question");
    }
  }


