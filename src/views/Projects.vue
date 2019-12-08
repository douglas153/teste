<template>
  <div class="projects">
    
      <v-container
      
     class="cont"
      >
          <div class="c">Fill this form </div>
          <hr>
          <v-row >
            <v-col
            cols="12"
            sm="6"
            md="6"
            >
            <v-text-field
            outlined
          label="Starting Zip"
          v-model="startingZip"
          ></v-text-field >
          <span>{{ startingCity }}</span>
            </v-col >
            <v-col>
          <v-text-field
            outlined
          label="Ending Zip"
          v-model="endingZip"
          ></v-text-field>
          <span>{{ endingZip }} </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" md="6">
              <v-btn
              color="blue"

              >Submit</v-btn>
            </v-col>
          </v-row>

      </v-container>
   
 

  </div>
</template>
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="lodash.js"></script>
<script>


export default {


  data () {
    return {
      startingZip: '',
      startingCity: '', 
      endingZip: '', 
      endingCity: '', 
    } 
  },
    watch: {
      startingZip: function(){
        this.startingCity = '' 
        if (this.startingZip.length == 5) {
          this.lookupStartingZip()
        }
      }
  }, 
  methods: {
    
    lookupStartingZip: function() {
      var app = this
      app.startingCity = "Searching..." 
    const axios = require('axios');
    axios.get('http://ziptasticAPI.com/' + app.startingZip )
        .then(function (response) {
          app.startingCity = response.data.city + ', ' + response.data.state
        })
      .catch (function (error) {
        app.startingCity = 'Invalid ZipCode'
      })
    }, 
  } 

}

</script>

<style>
.project.active {
  border-left: 4px solid #55e455;
}
.project.ongoing {
  border-left: 4px solid #f1e758;
}
.project.overdue {
  border-left: 4px solid #a31818;
}

.v-chip.project.active {
  background: #55e455;

}
.v-chip.project.ongoing {
  background: #f1e758;
}
.v-chip.project.overdue {
  background: #a31818;
  border-left: #a31818;
  
}

.cont {
background: #e6ece4;
}
.c {
  text-align: center;
}



</style>