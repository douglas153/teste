<template>
  <div> 

   <v-btn v-on:click="add-New-Bus">Aumentar</v-btn> 
  <span>{{ count }}</span>

        
  </div>
</template> 

<script>


export default {
  props: ["msg", "cnpj"],

  data() {
    return {
      message: "",
      Nome: "",
      Sobrenome: "",
      numero: 0,
      tak: 0,
      cpf: false,
     
    };
  },
  computed: {
    nomeCompleto: function() {
      return this.Nome + " " + this.Sobrenome;
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        alert(this.Nome + " " + this.Sobrenome + " " + this.numero);
      }
    },
      incrementCount() {
      this.count += 1;
    },
  
  /*  increment() {
      this.$emit("increment", 1);
    } */
  }
};
</script> 