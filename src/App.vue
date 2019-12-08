<template>
  <v-app class="grey lighten-3" >
    <navBar />

    <drawer />

    <navFoot />
   
    
    <v-content class="mx-4 mb-4">
      <router-view></router-view>

    
    </v-content>
  </v-app>


</template>


<script>

import navBar from '@/components/navBar'
import navFoot from '@/components/navFoot'
import drawer from '@/components/drawer' 



export default {

  name: 'App',
  components: {navBar, navFoot, drawer},
  data: () => {
    return {

    }
  }

  //
  
};
</script>
