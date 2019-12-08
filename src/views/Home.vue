<template>
  <div class="home">
    <br />
    <br />
    <v-btn right depressed class="my-3 blue white--text" router :to="rout">
      <v-icon left>mdi-face</v-icon>
      <span>Novo Cadastro</span>
    </v-btn>
    <br />
    <v-divider></v-divider>

    <div id="app">
      <v-app id="inspire">
        <v-data-table :headers="headers" :items="banks" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-app>
    </div>
  </div>
</template>


<script>
import produtosService from "../services/produtos";
export default {
  created() {
    produtosService
      .listar()
      .then(response => {
        // JSON responses are automatically parsed.
        this.banks = response.data;
      })
      .catch(e => {
        e;
      });
  },
  data() {
    return {
      rout: "/about",
      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "ID"
        },

        { text: "Nome", value: "nome" },
        { text: "Sigla", value: "Sigla" },
        { text: "Data_Atual", value: "Data_Atual" },
        { text: "Açoes", value: "Açoes" }
      ],

      banks: []
    };
  }
};
</script>

