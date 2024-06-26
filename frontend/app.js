const URL = "http://localhost:8080";

Vue.createApp({
    data() {
      return {
        pets: "",
        locate:""
      };
    },
    methods: { 
      getPets: async function() {
        let response = await fetch (`${URL}${locate}`);
        let data = await response.json();
        this.pets = data 
      },
      changePage: function () {
        if (this.locate == '/pets'){
        this.locate = '/applications'
      }else{
        this.locate = "/pets"
      }
    },

    },
    created: function () {
      console.log("app loaded");
    },
  }).mount("#app");