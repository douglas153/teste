<template>
  <div class="produtos">
    
    <h1  display-2 class="subheading black--text" >Produtos</h1>


<v-layout justify-left>
        <v-flex xs12 md3>
            <div class="title	 black--text">Nome:</div>   
             <v-text-field regular class="md6" placeholder="Nome" v-model="nome"></v-text-field>
        
       
            <div class="title	 black--text">Quantidade:</div>   
             <v-text-field regular class="md6" placeholder="Qtd" v-model="qtd"></v-text-field>
        
            
            <div class="title	 black--text">Valor:</div>   
             <v-text-field regular class="md6" placeholder="Valor" v-model="valor"></v-text-field>
        </v-flex>
          </v-layout>

         <v-btn depressed left color="blue" @click="salvar">
            <v-icon left>mdi-folder</v-icon>
            <span>Salvar</span>
            
        </v-btn>
          
    <div id="app">
      <v-app id="inspire">
        <v-data-table :headers="headers" :items="banks" :items-per-page="5" class="elevation-1"></v-data-table>
      </v-app>
    </div>

<h1>to do</h1>
  <ul>
    <li v-for="todo of todos" :key="todo.id">{{todo.name}} </li>

  </ul>






    </div>   
    </template>

    <script>


 

export default {

data() {
    return {
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
          Quatidade: 'Frozen Yogurt',
          valor: 159,
          opcoes: 6.0,
          
    
          }
     ],

      
      }
},
methods: {
  salvar(){
    console.log(this.nome, this.qtd, this.valor)
  }
}

};
    

  

    </script>