export default {

     app = new Vue({
        el: '#app',
        vuetify: new Vuetify(),
        data: () => ({
          icons: [
            'fab fa-facebook',
            'fab fa-twitter',
            'fab fa-google-plus',
            'fab fa-linkedin',
            'fab fa-instagram',
          ],
        }),
      })


}
