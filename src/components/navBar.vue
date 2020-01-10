<template>

 <v-app-bar
        color="light-blue darken-4"
        dark
        max-height="60"
      >
        <Popup />
        <v-app-bar-nav-icon @click.stop="openDrawer"></v-app-bar-nav-icon>
        
        <v-icon  color="white">mdi-summit</v-icon>
         <v-app-title class="mt-1 ml-2 body-1" >Everest</v-app-title>
        <v-spacer></v-spacer>
      
        <v-btn  right class="blue lighten-5 black--text"  router :to="rout">Entrar
            <v-icon right color="black">mdi-face</v-icon>
        </v-btn>
 </v-app-bar>

</template>

<script> 

import { bus } from "../main"

export default {
  
    data () {
        return {
           drawer: false,
            rout: '/about',
            site: 'https://www.aliexpress.com',
            links: [
                {icon: 'mdi-alien' , text: 'Dashboard', route: '/'},
                {icon: 'mdi-email' , text: 'Projects', route: '/projects'},
                {icon: 'mdi-bug' , text: 'About', route: '/about'},
                {icon: 'mdi-briefcase' , text: 'Produtos', route: '/produtos'},
                {icon: 'mdi-cloud' , text: 'Listas', route: '/listas'},
            ]
        }
    },
    methods: {
        openDrawer: function(){
            this.drawer = true 
            bus.$emit('openDrawer', true)
        }
    }

     

}
</script>
