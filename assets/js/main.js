/* 
Descrizione:
Attraverso l'apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
*/

const app = new Vue({
  el: "#app",
  data: {
    listeMail: [],
  },
  methods: {},

  mounted() {
    for (let index = 0; index < 10; index++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          const indirizzo = response.data.response;
          console.log(listeMail);
          this.listeMail.push(indirizzo);
          console.log(listeMail);
        });
    }
  },
});
