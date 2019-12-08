<template> 
  <div>

<v-flex md6>
            <h2>Hi {{ nomeCompleto }}</h2>
       

            <div>Nome: {{Nome}}</div>
            <div>Sobrenome: {{Sobrenome}}</div>
        
</v-flex>
<hr class="mt-4 mb-3" >

 <v-form class="px-3" ref="form">
        <v-flex md6>
       <div>Nome: </div>
        <v-text-field outlined type="text" v-model="Nome"></v-text-field>

        <div>Sobrenome: </div>
        <v-text-field outlined type="text" v-model="Sobrenome" ></v-text-field>
        </v-flex>   

        
     <div>{{Soma}}</div>

     <p >{{ condicao }}</p>

    
  
  <p>Quantas vezes o botão acima foi clicado: {{ counter }}</p>

  <p v-if="cnpj"  >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus vero illum sit
             doloremque ullam eum tenetur laudantium, dignissimos magni facilis. Ipsam, eligendi
              veritatis? Incidunt, laboriosam temporibus nemo perspiciatis ratione eos.</p>

<v-btn @click="submit">submit</v-btn>

 </v-form>
</div>
</template> 

<script>



export default {
    props: ['msg', 'cnpj', 'counter'],

    data () {
        return {
            message: '',
            Nome: '',
            Sobrenome: '', 
            numero: 0,

            cpf: false
      
    
        }
    },
    computed: {
    nomeCompleto: function (){
    return this.Nome + " " + this.Sobrenome
    },

  
    }, 
      methods: {
      submit() {
        if(this.$refs.form.validate()){
         alert(this.Nome + " " +  this.Sobrenome + " " + this.numero)
           }
      }
      
  }
}

 </script> 