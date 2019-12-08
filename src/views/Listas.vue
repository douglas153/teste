<template>
  <div>
     
       
      <produtolista :title="title" v-on:changeTitle="updatedTitle($event)" v-on:changeCpf="condCpf($event)" />
      
     



      <Message :title="title"/>



  </div>
</template>

<script>

import produtolista from '@/components/produtolista'
import  Message from '@/components/Message'


export default {
   components: {
       'produtolista': produtolista,
       'Message': Message,
        
   },
    
    data () {
        return {
             products: [
            {name: "douglas ", price: 2, show: false},
            {name: "do ", price: 1, show: false},
            {name: "popop ", price: 3, show: false}
            ], 
            cpf: false,
            title: 'Vue Wizards' 
        
        }
    },
  methods: {
      updateTitle: function(updatedTitle){
        this.title = updatedTitle;
      },
      condCpf: function (condCpf){
          this.cpf = condCpf;
      }
    }  

}
</script>

<style>