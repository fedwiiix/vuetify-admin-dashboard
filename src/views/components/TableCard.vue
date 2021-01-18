<template>
  <v-card class="mx-auto">
    <v-card-title>
      {{ data.title }}
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="search"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="data.header"
      :items="data.content"
      :search="search"
      :items-per-page="data.itemsPerPage"
      :footer-props="data.footer"
      :loading="loading"
      :loading-text="$t('loading')"
    ></v-data-table>

    <v-divider class="ml-2 mr-2" v-if="data.link" />
    <v-card-actions v-if="data.link">
      <v-btn block plain>
        <v-icon left small>
          {{ data.linkIcon }}
        </v-icon>
        <span>
          {{ data.link }}
        </span>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    loading: Boolean,
    data: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    search: "",
  }),
};
</script>