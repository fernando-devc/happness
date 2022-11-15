export default {
  getchar(context) {
    let token = window.localStorage.getItem("jwt-colabdev");
      return this.$axios.get("/character");
    }
  }


