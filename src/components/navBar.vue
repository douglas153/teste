<template>

<nav>
    <v-toolbar class="blue" >
        <Popup />
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>
        <span class="font-weight-light">Cadastro</span>
        <span>Banco</span>    
        </v-toolbar-title>
        <v-spacer></v-spacer>
      
        <v-btn depressed right color="white" router :to="rout">
            <span>Log in</span>
            <v-icon right>mdi-face</v-icon>
        </v-btn>
    </v-toolbar>
    

    


</nav>

</template>

<script> 



export default {
  
    data () {
        return {
           drawer: null,
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
    }

     

}
</script>
