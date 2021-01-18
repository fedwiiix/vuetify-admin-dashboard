<template>
  <v-container fluid class="pa-5">
    <DisplayEntries :data="dataTable" :loading="loading" />
  </v-container>
</template>

<script>
import DisplayEntries from "../components/Entry/DisplayEntries";
import axios from "axios";

export default {
  name: "entries",
  components: {
    DisplayEntries,
  },
  data: () => ({
    loading: true,
    dataTable: {
      title: "Alimentation",
      sort: "userId",
      itemsPerPage: 10,
      footer: { "items-per-page-options": [5, 10, 20, 50, -1] },
      header: [
        { text: "Fat (g)", value: "id" },
        { text: "Carbs (g)", value: "title" },
      ],
      content: [],
    },
  }),
  mounted() {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.dataTable.content = response.data;
      })
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  },
};
</script>