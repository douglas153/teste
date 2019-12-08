<template> 
    <div>
        
        <p>Copyright 2017 {{ title }}</p>
            <p v-if="cpf">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi necessitatibus molestiae modi id
                 nulla nostrum maiores beatae quaerat, illo placeat ab amet architecto eveniet doloremque nobis veniam deleniti nihil aliquid.</p>
        

       

             
    </div>
</template> 

<script>
import { bus } from '../main';



export default {
    props: ['title', 'cpf'],
    data () {
        return {
            message: '',
            cnpj: false,
            counter: 0

        }
    },
    created(){
        bus.$on('titleChanged', (data) => {
            this.title = data;
        })
            bus.$on('cpfChanged', (data) => {
            this.cpf = data;
        });
    },
    

  
    }


 </script> 