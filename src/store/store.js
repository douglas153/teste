import Vue from 'vue'
import Vuex from 'vuex'

import * as firebase from 'firebase'

Vue.use(Vuex)




export const store = new Vuex.Store({
    state: {
        products: [
            { name: 'Banana Skin', price: 20 },
            { name: 'Shiny Star', price: 40 },
            { name: 'Green Shells', price: 60 },
            { name: 'Red Shells', price: 80 }
        ],
        nome: 'pessoa.nome',
    },
    mutations: {

        
        createList(state, person){
            state.loadList.push(person)
        }
    },

    actions: {
        loadList({ commit }) {
            firebase.database().ref('projects').once('value').then((data) => {
                const person = []
                const obj = data.val()
                for (let key in obj) {
                    person.push({
                        id: key,
                        nome: obj[key].nome,
                        sobrenome: obj[key].sobrenome,
                        idade: obj[key].idade,
                        nacionalidade: obj[key].nacionalidade,
                        texto: obj[key].texto
                    })
                }
                commit ('setLoadedLists', person)
            }).catch((error) => {
                console.log(error)
            })

        },
        createList({ commit, }, pessoa) {
            const person = {
                nome: pessoa.nome,
                sobrenome: pessoa.sobrenome,
                idade: pessoa.idade,
                nacionalidade: pessoa.nacionalidade,
                texto: pessoa.texto
            }
            firebase.database().ref('projects').push(person).then((data) => {
                const key = data.key
                commit("createList", {
                    ...person,
                    id: key
                })
            }).catch((error) => {
                console.log(error)
            })
        }
    }
})