<template>
    <div>
         <v-btn outlined v-on:click="changeTitle">Robot</v-btn>

          <v-btn outlined v-on:click="changeCpf">CPF</v-btn>

         <h1 >{{ title }}</h1>    
        
      
    </div>
</template>

<script>
import { bus } from '../main'


export default {

  props: ['title'], 
   

  
    data () {
        return { 
           
        }
    },
   methods: {
      changeTitle: function(){                       // emit -- jogar essa funcao no outro componente
        // this.$emit('changeTitle', 'Vue Ninjas');
        this.title = 'Vue Ninjas';
        bus.$emit('titleChanged', this.title);
      },
      changeCpf: function(){                       // emit -- jogar essa funcao no outro componente
        // this.$emit('changeTitle', 'Vue Ninjas');
        this.cpf = true;
        bus.$emit('cpfChanged', this.cpf);
      }

    }
}
</script>

