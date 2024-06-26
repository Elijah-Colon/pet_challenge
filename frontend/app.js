const URL = "http://localhost:8080";

Vue.createApp({
    data() {
      return {
        page:1,
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
      changePage: function (page) {
        if ( 1 === page){
        this.page = 1
        this.locate = '/pets'
        this.fullPage = `${URL}` + this.locate
        console.log(this.fullPage)
      }else{
        this.page = 2
        this.locate = '/applications'
        this.fullPage = `${URL}` + this.locate
        console.log(this.fullPage)
      }
    },

    },
    created: function () {
      console.log("app loaded");
    },
  }).mount("#app");