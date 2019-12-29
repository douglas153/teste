<template>
  <div class="about">
    <h2>{{ count }}</h2>

    <v-text-field v-model="tak" v-on:keypress.enter="addNewTask()"></v-text-field>

    <Input @increment="incrementCount" :count="count" />

    <h3>Lista</h3>

    <produtolista />

    <Message  :tak="tak" @add-New-Bus="incrementCount" />

   <!-- <v-btn v-on:click="show()">Salvar</v-btn> -->

    
  </div>
</template>

<script>
import Input from "../components/Input";
import produtolista from "../components/produtolista";
import Message from "../components/Message";

import { bus } from "../main";
export default {
  components: {
    Input,
    produtolista,
    Message
  },
  data() {
    return {
      count: 1,
      tak: 0
    };
  },
  methods: {
 
    addNewTask() {
      //   this.$root.$emit('New task', this.task);
      this.tak = "task 4";
      bus.$emit("new-task", this.tak);
      alert(this.tak);
    }, 
    addNewBus(){
      this.$emit('add-New-Bus')
    },
       incrementCount() {
      this.count += 1;
    },

  }
};
</script>