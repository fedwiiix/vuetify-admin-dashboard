<template>
  <v-app>
    <Drawer />
    <Navbar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Drawer from "./core/Drawer";
import Navbar from "./core/Navbar";

export default {
  components: {
    Drawer,
    Navbar,
  },
  data: () => ({
    
  }),
  created: function () {
    console.log("created");
  },
};
</script>