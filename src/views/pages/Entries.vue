<template>
  <v-container fluid class="pa-5">
    <TableCard :data="dataTable" :loading="loading" />
  </v-container>
</template>

<script>
import TableCard from "../components/TableCard";
import axios from "axios";

export default {
  name: "entries",
  components: {
    TableCard,
  },
  data: () => ({
    loading: true,
    dataTable: {
      title: "Alimentation",
      sort: "userId",
      itemsPerPage: 10,
      footer: { "items-per-page-options": [5, 10, 20, 50, -1] },
      header: [
        {
          text: "Dessert",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Calories", value: "userId" },
        { text: "Fat (g)", value: "id" },
        { text: "Carbs (g)", value: "title" },
        { text: "Protein (g)", value: "body" },
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