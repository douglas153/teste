<template> 
    <div>
      
       <ul v-for="(task, i) in tasks" :key="i">
         <li>{{ task.text}}</li>
       </ul>

      <v-btn v-on:click="show()">Salvar</v-btn>
        
           
           
    </div>
</template> 

<script>


import { bus } from '../main'
export default {
    props: ['title', 'count', 'tak'],
    data () {
        return {
          number: 0,
              tasks: [
        {text: "task 1"},
        {text: "task 2" },
        {text: "task 3"},
      ]

        }
    },

  created() {
bus.$on('new-tak', (tak) => {
  this.count = tak;
  this.task.push(tak)
});
  } 

 /*     this.$root.$on("New task", (task) => {
        this.task.push(task);
      });
  } */
    }

 </script> 