<template>
  <div class="projects">
    
      <v-container
      
     class="cont"
      >
          <div class="c">Fill this form </div>
          <hr>
          <v-row >
            <v-col
            cols="12"
            sm="6"
            md="6"
            >
            <v-text-field
            outlined
          label="Starting Zip"
          v-model="startingZip"
          ></v-text-field >
          <span>{{ startingCity }}</span> <span>CIDADE: {{ localidade }}</span>
            </v-col >
            <v-col>
          <v-text-field
            outlined
          label="UF"
          v-model="endingZip"
          ></v-text-field>
          <span>estado: {{ estado1 }} </span> <span>UF: {{ uf }}</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-btn
              color="blue"

              >Submit</v-btn>
            </v-col>
            <v-col>
          <v-text-field
            outlined
          label="Cidade"
          v-model="localidade"
          ></v-text-field>
          <span>{{ endingZip }} </span>
            </v-col>
          </v-row>
            <v-row> 
            <v-col cols="12" class="mt-12">
          <v-tooltip  top>
            <template v-slot:activator="{ on }">
                <v-icon  v-on="on" color="grey lighten-1">mdi-cart</v-icon>
            </template>
            <span>Programmatic tooltip</span>
          </v-tooltip>
            </v-col>
          <v-col cols="12" md="4">
         <v-select
         outlined
         v-model="select"
         label="selecionar estado"
        :items="estado"
        item-text="content"
        item-value="key"
         >

         </v-select>
        </v-col>
      </v-row>
     
<div>
    <ul v-for="list  in lista" :key="list.id">
       <li >{{ lista.id }}</li>
      <li >{{ lista.nome }}</li>
     <li >{{ lista.sigla }}</li>
    </ul></div>

<span>
   data:  {{cidade}} 
</span><br>
<span>dados select:  {{select}}</span>
      </v-container>
  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="lodash.js"></script>
<script>
export default {
  data() {
    return {
      startingZip: '',
      startingCity: '', 
      localidade: '', 
      endingZip: '', 
      endingCity: '', 
      cep: '71261035',
      cidade: '',
      estado1: '',
 select: "",
      estado: [
        { key: 12, content: "AC" },
        { key: 33, content: "RJ" },
        { key: 29, content: "BA" },
        { key: 41, content: "PR" },
        { key: 51, content: "GO" },
        { key: 53, content: "DF " },
      ],
    } 
  },
    watch: {
      startingZip: function(){
        this.startingCity = '' 
        if (this.startingZip.length == 8) {
          this.lookupStartingZip()
        }
      },
      endingZip: function(){
        this.endingCity = '' 
        if (this.endingZip.length == 2) {
          this.lookupEndingZip()
        }
      },
     
    },
  
    created: {
        itens(){
            this.lista = this.lookupEndingZip()
        }, 
    },
  
  methods: {
    lookupStartingZip: function() {
      var app = this
      app.startingCity = "Searching..." 
      app.localidade = "Searching..." 
    const axios = require('axios');
    axios.get('https://viacep.com.br/ws/'+ app.startingZip + '/json/')
        .then(function (response) {
          app.startingCity = response.data.logradouro + ', ' + response.data.localidade
          app.localidade = response.data.localidade
        })
        .catch(function(error) {
          app.startingCity = "Invalid ZipCode";
        });
    },
       lookupEndingZip: function() {
      var app1 = this
      app1.endingCity = "Searching..." 
      app1.cidade = "Searching..." 
    const axios = require('axios');
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/' + app1.endingZip)
        .then(function (response) {
          app1.cidade = response.data.sigla + ', ' + response.data.nome
           app1.estado = response.data.sigla
        app1.localidade= response.data.nome
          app1.nome = response.data.nome
        })
        .catch(function(error) {
          app1.endingCity = "Invalid ZipCode";
        });
    },
        



    salvar(){
        console.log(this.pesquisa.nome + ' ' + this.pesquisa.sobrenome )
    },
    post: function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts', {
        title: this.pesquisa.nome, 
        body: this.pesquisa.sobrenome,
        userId: 2
      }).then(function(data){
        console.log(data)
      });
    }
  }
};
</script>

<style>
.project.active {
  border-left: 4px solid #55e455;
}
.project.ongoing {
  border-left: 4px solid #f1e758;
}
.project.overdue {
  border-left: 4px solid #a31818;
}

.v-chip.project.active {
  background: #55e455;
}
.v-chip.project.ongoing {
  background: #f1e758;
}
.v-chip.project.overdue {
  background: #a31818;
  border-left: #a31818;
}

.cont {
  background: #e6ece4;
}
.c {
  text-align: center;
}
</style>