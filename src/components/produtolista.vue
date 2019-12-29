<template>
  <div>
    <v-list>
      <v-list-item v-for="task  in task" :key="task.text" link></v-list-item>
      <v-list-item-content>
            <v-list-item-title >{{ task.text }}</v-list-item-title>
          </v-list-item-content>
    </v-list>

    <ul>
      <li v-for="task  in task" :key="task.text" >{{ task.text }}</li>
    </ul>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, incidunt placeat. Voluptatum, culpa dignissimos dolores eos repellat,
       ex officiis sed tempore mollitia repellendus temporibus vel recusandae ut, veniam harum ea.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {text: "task 1"},
        {text: "task 2" },
        {text: "task 3"},
      ]
    };
  },
  methods: {}
};
</script>

