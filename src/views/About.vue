<template>
  <div class="about">

<h3 class="display-1">Novo Banco</h3>
    
<v-card flat class="pa2">
        <v-layout row wrap justify-center>
          <v-flex xs12 md6>
            <div class="display-1	 black--text">Nome:</div>
             <v-text-field outlined></v-text-field>
             <div class="display-1	 black--text">Valor:</div>
            
             <v-text-field outlined v-model.lazy="price" :v-money="money"></v-text-field>
             
             </v-flex>
             
          </v-layout>


      </v-card>
    
<h3 class="display-1">Produtos</h3>
<v-container class="display-1" fluid>
  <v-card  class="pa5" height="400" color=" black--text" >
       <div color=" black--text" >
      <v-checkbox class="font-weight-black  red--text" v-model="checkbox1" :label="`CGI: ${checkbox1.toString()}`"></v-checkbox><br></div> 
      <v-checkbox class="font-weight-black"  v-model="checkbox2" :label="`CGV: ${checkbox2.toString()}`"></v-checkbox><br>
      <v-checkbox class="font-weight-black" v-model="checkbox3" :label="`Regulaçao Fundiaria: ${checkbox3.toString()}`"></v-checkbox><br>
      <v-checkbox class="font-weight-black" v-model="checkbox4" :label="`Financiamento Imovel: ${checkbox4.toString()}`"></v-checkbox><br>
      
      
      </v-card>
    </v-container>

  </div>
</template>

<script>

export default {
  data () {
        return {
            price: 123.45,
        money: {
          
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' #',
          precision: 2,
          masked: false
        },

          checkbox1: true,
          checkbox2: true,
          checkbox3: true,
          checkbox4: true,
      radioGroup: 1,
      switch1: true,

      }
  }
}


</script>