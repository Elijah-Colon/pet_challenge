const URL = "http://localhost:8080";

Vue.createApp({
    data() {
      return {
        pets: "",
        locate:"/pets",
        fullPage:`${URL}`
      };
    },
    methods: { 
      getPets: async function() {
        let response = await fetch (this.fullPage);
        let data = await response.json();
        this.pets = data 
      },
      changePage: function () {
        if (this.locate == '/pets'){
        this.locate = '/applications'
        this.fullPage = `${URL}` + this.locate
        console.log(this.fullPage)
      }else{
        this.locate = "/pets"
        this.fullPage = `${URL}` + this.locate
        console.log(this.fullPage)
      }
    },

    },
    created: function () {
      console.log("app loaded");
    },
  }).mount("#app");