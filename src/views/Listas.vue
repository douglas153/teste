<template>
  <div>
    <v-app>
     <v-container>
          <v-row> 
          <v-col cols="12" lg="6">
          <v-menu
            v-model="menu2"
            :close-on-content-click="false"
            max-width="290"
          >
            <template v-slot:activator="{ on }">
              <v-text-field
                :value="computedDateFormattedDatefns"
                clearable
                label="Formatted with datefns"
                readonly
                v-on="on"
                @click:clear="date = null"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="date"
              @change="menu2 = false"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
  </div>
</template>

<script>

export default {
    
    data () {
        return {
   
        }
    },
  methods: {
   computedDateFormattedDatefns () {
      return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
    },
    }  

}
</script>

<style>