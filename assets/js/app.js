const { createApp } = Vue

createApp({
data() {
    return {
        emailsToGenerate: 10,
        apiUrl: "https://flynn.boolean.careers/exercises/api/random/mail",
        emailList: [],
        generationComplete: false,
        errorPresent: false,
    }
}, 
methods: {
    generateEmails() {
      for (let i = 0; i < this.emailsToGenerate; i++) {
        axios
        .get(this.apiUrl)
        .then(response => {
          this.emailList.push(response.data.response);
          if(i === this.emailsToGenerate - 1) {
            this.generationComplete = true;
          }
        })
        .catch(error => {
          console.error(`${error.message}`);
          this.errorPresent = true;
        })
      }
    }
},
mounted() {
    this.generateEmails();
}
}).mount('#app')