<template>
  <div class="produtos">
    <h1 display-2 class="subheading black--text">Produtos</h1>

          <v-row>
              <v-col cols="12" md="4">
        <v-text-field   label="Nome" v-model="nome"></v-text-field></v-col>

        <v-col cols="12" md="4">
        <v-text-field   label="Sobrenome" v-model="sobrenome"></v-text-field></v-col>

        <v-col cols="12" md="4">
        <v-text-field   label="Idade" v-model="idade"></v-text-field></v-col>
      </v-row>
      <v-row> 
      <v-col cols="12" md="4">
        <v-text-field   label="Nacionalidade" v-model="nacionalidade"></v-text-field></v-col>

        <v-col cols="12" md="4">
        <v-text-field   label="Texto" v-model="texto"></v-text-field></v-col>
        <v-col cols="12" md="4" class="mt-3">
        <v-btn depressed left color="blue" @click="salvar">
      <v-icon left>mdi-folder</v-icon>
      <span>Salvar</span>
    </v-btn></v-col>
    </v-row>
    <div>{{ person.nome }}</div>

    <div id="app">
      <v-app id="inspire">
        <v-data-table :headers="headers" :items="banks" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-app>
    </div>

    <h1>to do</h1>
   
  </div>
</template>

<script src="https://www.gstatic.com/firebasejs/7.6.1/firebase-app.js"></script>
    <script>
    import { mapState } from 'vuex'
import firebase from '@/fb'
import db from '../../src/fb'

export default {
  data() {
    return {

        nome: '',
        sobrenome: '', 
        idade: 0, 
        nacionalidade: '', 
        texto: '', 
    

      headers: [
        {
          text: "ID",
          align: "left",
          sortable: false,
          value: "ID"
        },

        { text: "Nome", value: "nome" },
        { text: "Quatidade", value: "Quatidade" },
        { text: "valor", value: "valor" },
        { text: "Opcoes", value: "opcoes" }
      ],

      banks: [
        {
          nome: 4.0,
          Quatidade: "Frozen Yogurt",
          valor: 159,
          opcoes: 6.0
        }
      ]
    };
  },
  methods: {
    salvar() {
        const person = {
            nome: this.nome,
            sobrenome: this.sobrenome,
            idade: this.idade,
            nacionalidade: this.nacionalidade,
            texto: this.texto 
        }
        this.$store.dispatch('createList', person)

    }
  },
    computed: mapState({
    nome: state => state.nome,
  }),
  computed:{
        person() {
        return this.$store.getters.loadedList
      }
  }

};
</script>