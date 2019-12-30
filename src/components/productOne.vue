<template>
    <div id="product-list-one">
        <h2>product list One</h2>
        <span>{{nome}}</span>

        <span>{{ products }}</span>

        <ul v-for="(product, index) in products" :key="index">
           <li> {{ product.name}}</li>
            <li> {{product.price}}</li>
      
        </ul>
    </div>

</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {
        }
    },
  
    computed: mapState({
    nome: state => state.nome,
    products: state => state.products,
  })

}
</script>