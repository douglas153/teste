<template>
<div>
    
    <v-navigation-drawer v-model="drawer" app class="light-blue darken-4">
        <v-icon color="white" @click.stop="drawer = !drawer">mdi-format-list-bulleted</v-icon>
          <v-flex class="mt-4 mb-3">
        
    </v-flex>
        <v-list>

        <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>
         

    </v-navigation-drawer>
</div>
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
                {icon: 'mdi-person' , text: 'Login', route: '/Registration'},
            ]
        }
    },
    created(){
        bus.$on('openDrawer', (data) => {
            this.drawer = data; 
        })
    }

     

}
</script>