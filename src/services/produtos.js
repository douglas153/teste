import { http } from './config'

export default {

    listar: () => {
     //   return http.get('produtos')
        return http.get('produtos')
    }
}